import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { API_URL } from '../constant';
import { Category } from '../models/category';
import { ValidationEror } from '../models/error';
import { ErrorFood } from '../models/errorFood';

import { Food } from '../models/food';
import { ImageBean } from '../models/imageBean';

@Component({
  selector: 'app-food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.css'],
})
export class FoodCreateComponent implements OnInit {
  categories: Category[] = [];

  error: ValidationEror = new ValidationEror();
  errorFood: ErrorFood = new ErrorFood();
  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<FoodCreateComponent>
  ) { }
  food: Food = new Food();
  taskImageFile: any = null;
  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.http.get<Category[]>(API_URL + '/categories').subscribe((response) => {
      this.categories = response;

      console.log(this.categories);
    });
  }
  onSaveFood() {
    let formData: FormData = new FormData();
    formData.append('file', this.taskImageFile);

    this.http
      .post<ImageBean>(API_URL + '/files', formData)
      .subscribe((resp) => {
        this.food.image = resp.fileName;

        this.http.post<Food>(API_URL + '/food', this.food).subscribe(
          (resp) => {
            localStorage.setItem('loadFoods', '1');
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
}
