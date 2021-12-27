package az.qedirxum.shopping.dao;
import org.springframework.data.jpa.repository.JpaRepository;

import az.qedirxum.shopping.model.Category;

public interface categoryDAO extends JpaRepository<Category,Integer> {
    
}
