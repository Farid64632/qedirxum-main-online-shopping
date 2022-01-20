import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { API_URL } from '../constant';
import { Category } from '../models/category';
import { ValidationEror } from '../models/error';
import { ErrorFood } from '../models/errorFood';

import { Food } from '../models/food';
import { ImageBean } from '../models/imageBean';
import { Inqridient } from '../models/inqridient';
import { AllLoadService } from '../service/all-load.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


@Component({
  selector: 'app-food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.css'],
})
export class FoodCreateComponent implements OnInit {
  selects: any[] = [];
  categories: Category[] = [];
  inqiridents:Inqridient[]=[];
  inqridientsForm = new FormControl();
  selectedInqridients:any;
  error: ValidationEror = new ValidationEror();
  errorFood: ErrorFood = new ErrorFood();
  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<FoodCreateComponent>,private serviceLoad:AllLoadService
  ) { }
  food: Food = new Food();
  taskImageFile: any = null;
  ngOnInit(): void {
    this.loadCategories();
    this.loadInqridients();


  }

  loadInqridients() {
    this.http.get<Inqridient[]>(API_URL + '/inqridients').subscribe(response => {
      this.inqiridents = response;

      console.log(this.inqiridents);
    });
  }
  loadCategories() {
    this.http.get<Category[]>(API_URL + '/categories').subscribe((response) => {
      this.categories = response;

      console.log(this.categories);
    });
  }
  onSaveFood() {

    this.food.inqridients=this.selectedInqridients.toString();
    this.food.selects=this.selects.toString();
  
    let formData: FormData = new FormData();
    formData.append('file', this.taskImageFile);

    this.http
      .post<ImageBean>(API_URL + '/files', formData)
      .subscribe((resp) => {
        this.food.image = resp.fileName;

        this.http.post<Food>(API_URL + '/food', this.food).subscribe(
          (resp) => {
         this.serviceLoad.foodLoad.emit(true);
            this.dialogRef.close();
          },
          (error) => {
          
            
            this.error.errors = [];
            this.errorFood.errorDescription = [];
            this.errorFood.errorName = [];
            this.errorFood.errorPrice = [];
            this.errorFood.errorMiqdar = [];
            this.errorFood.errorCategory = [];

            for (let index = 0; index < error.error.length; index++) {
              this.error.errors.push(error.error[index]);

              if (error.error[index].fieldName == 'name') {
                this.errorFood.errorName.push(error.error[index].fieldError);
              }

              if (error.error[index].fieldName == 'description') {
                this.errorFood.errorDescription.push(
                  error.error[index].fieldError
                );
              }

              if (error.error[index].fieldName == 'price') {
                this.errorFood.errorPrice.push(error.error[index].fieldError);
              }
              if (error.error[index].fieldName == 'miqdar') {
                this.errorFood.errorMiqdar.push(error.error[index].fieldError);
              }
              if (error.error[index].fieldName == 'category') {
                this.errorFood.errorCategory.push(
                  error.error[index].fieldError
                );
              }
            }
          }
         
        );
      });
      console.log(this.errorFood);
  }

  onImageSelected(event: any) {
    this.taskImageFile = event.target.files[0];
    console.log('girdi');
  }


  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

  
    if (value) {
      this.selects.push( value);
    }
    event.chipInput!.clear();
  }

  remove(select: any): void {
    const index = this.selects.indexOf(select);

    if (index >= 0) {
      this.selects.splice(index, 1);
    }
  }
}
