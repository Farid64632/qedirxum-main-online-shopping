package az.qedirxum.shopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import az.qedirxum.shopping.model.Categry;

public interface CategoryDao extends JpaRepository<Categry,Integer>   {
    
}
