import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { API_URL } from '../constant';
import { FoodCreateComponent } from '../food-create/food-create.component';
import { Category } from '../models/category';
import { Food } from '../models/food';
import { AllLoadService } from '../service/all-load.service';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css'],
})
export class FoodTableComponent implements OnInit {
  foods: Food[] = [];
  bool:boolean=false;
  imagePath: string = '';
  popoverTitle:string='Təsdiq';
  popoverMessage:string='Yemek Silme prosesini təsdiqləməyə əminsiniz?';
  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private router: Router,private serviceLoad:AllLoadService
  ) {}
  openDialog() {
    this.dialog.open(FoodCreateComponent);
  }
  ngOnInit(): void {
    this.serviceLoad.foodLoad.subscribe(
      resp=>{
      
        this.bool=resp;
      }
      
      );

    this.imagePath = API_URL + '/files/files/';
    this.loadFoods();
    this.load();
  }
  loadFoods() {
    this.http.get<Food[]>(API_URL + '/food').subscribe(response => {
      this.foods = response;

      console.log(this.foods);
    });
  }
  
  load(){
    setInterval(() => {
      if (this.bool==true){
  this.loadFoods();
  this.serviceLoad.foodLoad.emit(false);
      } 
        
      },100);
  
    }

    deleteFoodById(id:number){
      this.http.delete(API_URL+'/food/'+id).subscribe(
        resp=>{
        
       this.loadFoods();
  
        }
     );
    }
}
