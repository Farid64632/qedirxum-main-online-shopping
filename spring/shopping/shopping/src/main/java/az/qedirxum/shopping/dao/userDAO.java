package az.qedirxum.shopping.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import az.qedirxum.shopping.model.UserModel;

@Component
public class userDAO {

	@Autowired
	private DataSource dataSource;

	private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	public List<String> getUserRoles(String username) {

		List<String> roles = new ArrayList<String>();
		try {
			Connection c = dataSource.getConnection();
			PreparedStatement st = c
					.prepareStatement("select authority from authorities where username='" + username + "'");
			ResultSet rs = st.executeQuery();

			while (rs.next()) {
				roles.add(rs.getString(1));
			}

			rs.close();
			st.close();
			c.close();

		} catch (Exception e) {
			e.printStackTrace();
		}

		return roles;
	}

	public void createUser(UserModel user, String authority) {

		try {
			Connection c = dataSource.getConnection();
			PreparedStatement st = c.prepareStatement("insert into users (username,password,enabled,note) values(?,?,?,?);");
			PreparedStatement st1 = c.prepareStatement("insert into authorities (username,authority) values(?,?);");
			st.setString(1, user.getUsername());
		if (authority=="ROLE_USER") {
			st.setString(2, "{bcrypt}" + passwordEncoder.encode(user.getPassword()));
		
		} else {
			st.setString(2, "{noop}" + user.getPassword());
		
		}
			st.setInt(3, 1);
			st.setString(4, user.getNote());
		
			
			st.executeUpdate();
			st1.setString(1, user.getUsername());
			st1.setString(2, authority);
			st.close();
			st1.executeUpdate();
			c.close();

		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
	public List<UserModel> getManagers(){
        UserModel user=new UserModel();
       List<UserModel> users = new ArrayList<>();
        try {
            Connection c = dataSource.getConnection();
            PreparedStatement s=c.prepareStatement("SELECT * FROM authorities where authority='ROLE_MANAGER'");
        ResultSet result = s.executeQuery();

     
  while (result.next()) {
      user=getUserByUsername(result.getString("username"));
      users.add(user);
  }
 
        System.out.println(user);
        } catch (Exception e) {
            //TODO: handle exception
        }
        System.out.println(users);
        return users;
    }
	
	public UserModel getUserByUsername(String username){
        UserModel user=new UserModel();
        try {
            Connection c = dataSource.getConnection();
            PreparedStatement s=c.prepareStatement("SELECT * FROM users where username=?");
            s.setString(1, username);
        ResultSet result = s.executeQuery();

     
  while (result.next()) {
      user.setUsername(result.getString("username"));
      user.setPassword(result.getString("password"));
      user.setNote(result.getString("note")); 

	}
 
        } catch (Exception e) {
            //TODO: handle exception
        }
        return user;
    }
}
