package az.qedirxum.shopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import az.qedirxum.shopping.model.FoodModel;
import az.qedirxum.shopping.model.InqridientModel;

public interface InqridientDao extends JpaRepository<InqridientModel,Integer> {
	public List<InqridientModel>findAll();

}
