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


import az.qedirxum.shopping.dao.InqridientDao;
import az.qedirxum.shopping.error.ErrorValidation;
import az.qedirxum.shopping.model.Inqridient;

@RestController
@RequestMapping(path="/inqridients")
@CrossOrigin(origins = "http://localhost:4200")
public class InqridientRestController {
@Autowired
private InqridientDao inqridientDao;


@PreAuthorize("hasRole('ROLE_MANAGER')")
@GetMapping
public List<Inqridient>findAll(){
	return inqridientDao.findAll();
}
@PreAuthorize("hasRole('ROLE_MANAGER')")
@DeleteMapping(value = "/{id}")
public void deleteInqridientById(@PathVariable Integer id){
	inqridientDao.deleteById(id);
}

@PreAuthorize("hasRole('ROLE_MANAGER')")
@PostMapping
	public Inqridient add(@Valid @RequestBody Inqridient inqridientModel,BindingResult result){
		Inqridient inqridientModelSaved=null;
		if (result.hasErrors()) {
			throw new ErrorValidation(result);

		}else{
			inqridientModelSaved=inqridientDao.save(inqridientModel);
		}
	 return inqridientModelSaved;
	}


}