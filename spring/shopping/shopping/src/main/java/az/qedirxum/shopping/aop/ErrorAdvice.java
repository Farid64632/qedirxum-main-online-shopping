package az.qedirxum.shopping.aop;


import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import az.qedirxum.shopping.error.ErrorValidation;

@RestControllerAdvice
public class ErrorAdvice {
  
    @ExceptionHandler
    @ResponseStatus(code=HttpStatus.BAD_REQUEST)
    public List<FieldErrorModel> handleShopValidationError(ErrorValidation error){
List<FieldErrorModel>  errors= new ArrayList<FieldErrorModel>();
BindingResult br=error.br;
for (FieldError e : br.getFieldErrors()) {
    errors.add(new FieldErrorModel(e.getField(), e.getDefaultMessage()));
}
return errors;

    }
}

class FieldErrorModel{
    private String fieldName;
    private String fieldError;

public FieldErrorModel(String fieldName,String fieldError){
    super();
    this.fieldName=fieldName;
    this.fieldError=fieldError;
}

    public String getFieldName() {
        return fieldName;
    }
    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }
    public String getFieldError() {
        return fieldError;
    }
    public void setFieldError(String fieldError) {
        this.fieldError = fieldError;
    }
    
}