import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { API_URL } from '../constant';
import { ValidationEror } from '../models/error';
import { ErrorInqridient } from '../models/errorInqridient';
import { Inqridient } from '../models/inqridient';

@Component({
  selector: 'app-inqridient-create',
  templateUrl: './inqridient-create.component.html',
  styleUrls: ['./inqridient-create.component.css']
})
export class InqridientCreateComponent implements OnInit {

  inqiridient:Inqridient=new Inqridient();
  error: ValidationEror = new ValidationEror();
  errorInqridient: ErrorInqridient = new ErrorInqridient();
  constructor(private http:HttpClient,public dialogRef: MatDialogRef<InqridientCreateComponent>
    ) { }

  ngOnInit(): void {
  }


  onSaveInqridient(){

 
   this.http.post<any>(API_URL +'/inqridients',this.inqiridient)
   
.subscribe(
  (resp) => {
    localStorage.setItem('loadInqridients','1');
        this.dialogRef.close();
  },
   (error) =>{
   

console.log(error);

    this.error.errors = [];

    this.errorInqridient.errorName = [];
    this.errorInqridient.errorPrice = [];
    this.errorInqridient.errorMiqdar = [];

    for (let index = 0; index < error.error.length; index++) {
      this.error.errors.push(error.error[index]);
   
      if (error.error[index].fieldName == 'name') {
        this.errorInqridient.errorName.push(error.error[index].fieldError);
      }



      if (error.error[index].fieldName == 'price') {
        this.errorInqridient.errorPrice.push(error.error[index].fieldError);
      }
      if (error.error[index].fieldName == 'miqdar') {
        this.errorInqridient.errorMiqdar.push(error.error[index].fieldError);
      }
 
    }

    console.log(this.errorInqridient);

     }
 );

 }

  
}
