package az.qedirxum.shopping.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import az.qedirxum.shopping.model.FoodModel;

public interface FoodDao extends JpaRepository<FoodModel,Integer> {
public List<FoodModel>findAll();
}
