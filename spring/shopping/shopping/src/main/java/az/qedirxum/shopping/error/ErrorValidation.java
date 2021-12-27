package az.qedirxum.shopping.error;

import org.springframework.validation.BindingResult;

public class ErrorValidation  extends RuntimeException {
    

    public BindingResult br;
   
    public ErrorValidation(BindingResult br){

        this.br=br;
    }

}
