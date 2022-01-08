import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from '../constant';
import { Category } from '../models/category';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  categories: Category[] = [];
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loadCategories();
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
