import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { API_URL } from '../constant';
import { FoodCreateComponent } from '../food-create/food-create.component';
import { Food } from '../models/food';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css']
})
export class FoodTableComponent implements OnInit {
 foods:Food[]=[];

  constructor(public dialog:MatDialog,private http:HttpClient,private router:Router) { }
  openDialog(){
    this.dialog.open(FoodCreateComponent);

  }
  ngOnInit(): void {
    this.loadFoods();
  }
  loadFoods(){
    this.http.get<Food[]>(API_URL+'/food').subscribe(
      response=>{
        this.foods=response;
       
       console.log(this.foods);
       
        ;
     }

    );
  }
}
