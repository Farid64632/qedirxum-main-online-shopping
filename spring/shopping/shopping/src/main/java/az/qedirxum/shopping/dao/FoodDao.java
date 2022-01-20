package az.qedirxum.shopping.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import az.qedirxum.shopping.model.Food;

public interface FoodDao extends JpaRepository<Food,Integer> {

}
