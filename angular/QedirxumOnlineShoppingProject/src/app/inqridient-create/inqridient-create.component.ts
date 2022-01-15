import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { API_URL } from '../constant';
import { ValidationEror } from '../models/error';
import { ErrorInqridient } from '../models/errorInqridient';
import { Inqridient } from '../models/inqridient';
import { AllLoadService } from '../service/all-load.service';

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
    ,private serviceLoad:AllLoadService
    ) { }

  ngOnInit(): void {
  }


  onSaveInqridient(){

 
   this.http.post<any>(API_URL +'/inqridients',this.inqiridient)
   
.subscribe(
  (resp) => {
this.serviceLoad.inqridientLoad.emit(true);

        this.dialogRef.close();
  },
   (error) =>{
   

console.log(error);

    this.error.errors = [];

    this.errorInqridient.errorName = [];


    for (let index = 0; index < error.error.length; index++) {
      this.error.errors.push(error.error[index]);
   
      if (error.error[index].fieldName == 'name') {
        this.errorInqridient.errorName.push(error.error[index].fieldError);
      }
 
    }

    console.log(this.errorInqridient);

     }
 );

 }

  
}
