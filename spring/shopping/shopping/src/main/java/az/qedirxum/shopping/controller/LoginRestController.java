package az.qedirxum.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import az.qedirxum.shopping.dao.userDAO;
import az.qedirxum.shopping.model.UserModel;
@RestController

@CrossOrigin(origins = "*")
public class LoginRestController {
  @Autowired
    private userDAO userDao;
 


    @GetMapping(path="/login")
        public  List<String> login(){ 

          String username=SecurityContextHolder.getContext().getAuthentication().getName();
            return userDao.getUserRoles(username);    
         }
    
         
         @PostMapping(path="/signup")
         public void signup(@RequestBody UserModel user){ 
 userDao.createUser(user,"ROLE_USER");
             
          }
         
          @PreAuthorize("hasRole('ROLE_SUPER_ADMIN')")
          @PostMapping(path="/signupmanager")
          public void signupmanager(@RequestBody UserModel user){ 
  userDao.createUser(user,"ROLE_MANAGER");
              
           }
           @PreAuthorize("hasRole('ROLE_SUPER_ADMIN')")
         @GetMapping(path="/get-managers")
         public List<UserModel> getManagers(){ 
             return userDao.getManagers();
          }
}
