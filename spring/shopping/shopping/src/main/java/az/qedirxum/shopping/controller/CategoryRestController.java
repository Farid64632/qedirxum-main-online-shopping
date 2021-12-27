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

import az.qedirxum.shopping.dao.categoryDAO;
import az.qedirxum.shopping.error.ErrorValidation;
import az.qedirxum.shopping.model.Category;

@RestController
@RequestMapping(path="/category")
public class CategoryRestController {
    

    @Autowired
private categoryDAO categoryDAO;


@GetMapping
public List<Category>findAll(){
	return categoryDAO.findAll();
}


@PostMapping
	public Category add(@Valid @RequestBody Category category,BindingResult result){
		Category categorysaved=null;
		if (result.hasErrors()) {
			throw new ErrorValidation(result);

		}else{
			categorysaved=categoryDAO.save(category);
		}
	 return categorysaved;
	}
}
