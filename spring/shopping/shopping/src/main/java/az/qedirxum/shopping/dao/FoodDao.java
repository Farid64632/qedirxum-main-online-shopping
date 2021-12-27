package az.qedirxum.shopping.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import az.qedirxum.shopping.model.Food;

public interface FoodDao extends JpaRepository<Food,Integer> {

}
