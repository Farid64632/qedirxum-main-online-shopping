package az.qedirxum.shopping.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import az.qedirxum.shopping.dao.FoodDao;
import az.qedirxum.shopping.error.ErrorValidation;
import az.qedirxum.shopping.model.Food;


@RestController
@RequestMapping(path="/food")
@CrossOrigin(origins = "http://localhost:4200")
public class FoodRestController {
	
	@Autowired
	private FoodDao foodDAO;








	@GetMapping
	public List<Food>findAll(){
		return foodDAO.findAll();
	}
	@PreAuthorize("hasRole('ROLE_MANAGER')")
	@DeleteMapping(value = "/delete/{id}")
public void deleteFoodById(@PathVariable Integer id){
	foodDAO.deleteById(id);
}
@PreAuthorize("hasRole('ROLE_MANAGER')")
	@PostMapping
	public void addFood(@Valid @RequestBody Food food ,BindingResult result){
	if(result.hasErrors()) {
			throw new ErrorValidation(result);
		}
	foodDAO.save(food);	}


	
	@GetMapping(value = "/get/{id}")
public Food getFoodById(@PathVariable Integer id){

		return foodDAO.findById(id).get();

}
}
