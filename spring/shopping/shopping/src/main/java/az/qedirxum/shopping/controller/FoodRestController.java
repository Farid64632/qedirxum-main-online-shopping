package az.qedirxum.shopping.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import az.qedirxum.shopping.dao.FoodDao;
import az.qedirxum.shopping.error.ErrorValidation;
import az.qedirxum.shopping.model.Food;
import az.qedirxum.shopping.model.Inqridient;

@RestController
@RequestMapping(path="/food")
public class FoodRestController {
	
	@Autowired
	private FoodDao foodDAO;
	
	@GetMapping
	public List<Food>findAll(){
		return foodDAO.findAll();
	}
	
	@PostMapping
	public void addFood(@Valid @RequestBody Food food ,BindingResult result){
		if(result.hasErrors()) {
			throw new ErrorValidation(result);
		}
		foodDAO.save(food);
	}

}
