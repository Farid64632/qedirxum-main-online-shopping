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


import az.qedirxum.shopping.dao.CategoryDao;
import az.qedirxum.shopping.error.ErrorValidation;
import az.qedirxum.shopping.model.Categry;

@RestController
@RequestMapping(path="/categories")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryRestController {
    

    @Autowired
private CategoryDao categoryDAO;


@GetMapping
public List<Categry>findAll(){
	return categoryDAO.findAll();
	}

	@PreAuthorize("hasRole('ROLE_SUPER_ADMIN')")
@DeleteMapping(value = "/{id}")
public void deleteCategoryById(@PathVariable Integer id){
	categoryDAO.deleteById(id);
}


@PreAuthorize("hasRole('ROLE_SUPER_ADMIN')")
@PostMapping
	public Categry add(@Valid @RequestBody Categry category,BindingResult result){
		Categry categorysaved=null;
		if (result.hasErrors()) {
			throw new ErrorValidation(result);

		}else{
			categorysaved=categoryDAO.save(category);
		}
	 return categorysaved;
	}
}
