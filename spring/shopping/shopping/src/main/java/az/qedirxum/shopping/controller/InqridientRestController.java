package az.qedirxum.shopping.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import az.qedirxum.shopping.dao.InqridientDao;
import az.qedirxum.shopping.model.InqridientModel;

@RestController
@RequestMapping(path="/rest/inqridients")
public class InqridientRestController {
@Autowired
private InqridientDao inqridientDao;


@GetMapping
public List<InqridientModel>findAll(){
	return inqridientDao.findAll();
}
@GetMapping(path="/{id}")
public InqridientModel findById(@PathVariable(name="id")Integer id){
return inqridientDao.findById(id).get();
}




}