package az.qedirxum.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;



@RestController

@CrossOrigin(origins = "*")
public class LoginRestController {
 
 


    @GetMapping(path="/login")
        public void login(){ 

           SecurityContextHolder.getContext().getAuthentication().getName();
         
         }
    
         
}
