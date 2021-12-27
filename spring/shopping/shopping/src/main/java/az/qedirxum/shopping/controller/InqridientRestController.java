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
@GetMapping(path={"/inqridients"})
public String showInqridientsPage(Model model) {
	List<InqridientModel> inqridients = inqridientDao.findAll();
	model.addAttribute("inqridients", inqridients);

	return "inqridients-page";
}
@GetMapping(path = "/inqridients/new")
public String openNewInqridientsPage(Model model) {
	InqridientModel inqridients = new InqridientModel();
	model.addAttribute("inqridients", inqridients);


	return "new-inqridients";
}

@PostMapping(path = "/inqridients/new-inqridients-process")
public String saveInqridients(@ModelAttribute(name = "myInqridients")@Valid@RequestParam(value = "imageFile", required = false) MultipartFile imageFile,InqridientModel inqridients, BindingResult result, Model model) {
	if (result.hasErrors()) {
	   System.out.println("error var");

		return "new-inqridients";
	}

/*	if (imageFile.isEmpty()&&inqridients.getId()!=null) {       bu kod şəkil funksiyası gəldikdə işləyəcək
		inqridients.setImage(InqridientModel.findAll(inqridients.getId()).get().getImage());
	}else {
		computer.setImage(storageService.store(imageFile));   
	}*/

	inqridientDao.save(inqridients);
	List<InqridientModel> inqridient = inqridientDao.findAll();
	model.addAttribute("inqridients", inqridient);
	return "redirect:/inqridients-page";

}

}