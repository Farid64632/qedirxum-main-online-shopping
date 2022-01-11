import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from '../constant';
import { Category } from '../models/category';
import { Food } from '../models/food';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  categories: Category[] = [];
  constructor(private http:HttpClient,private router:Router) { }
  foods: Food[] = [];
  imagePath: string = '';
  
  ngOnInit(): void {
    this.loadCategories();
    this.loadFoods();
    this.imagePath = API_URL + '/files/files/';
  }
  loadFoods() {
    this.http.get<Food[]>(API_URL + '/food').subscribe(response => {
      this.foods = response;

      console.log(this.foods);
    });
  }
  onButtonGroupClick($event:any){
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }

  }
  loadCategories(){
    this.http.get<[]>(API_URL+'/categories').subscribe(
      response=>{
        this.categories=response;
       
       console.log(this.categories);
       
        ;
     }

    );
  }
  
}
