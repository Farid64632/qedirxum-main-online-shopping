import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { API_URL } from '../constant';
import { ModalInfoMenuComponent } from '../modal-info-menu/modal-info-menu.component';
import { Category } from '../models/category';
import { Food } from '../models/food';
import { AllIdService } from '../service/all-id.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  categories: Category[] = [];
  constructor(private http:HttpClient,private router:Router,public dialog:MatDialog,private idService:AllIdService) { }
  foods: Food[] = [];
  imagePath: string = '';
  
  ngOnInit(): void {
    this.loadCategories();
    this.loadFoods();
    this.imagePath = API_URL + '/files/files/';
  }
  openDialog(id:number){
 
  
    this.idService.idModalInfoMenu=id;
    this.dialog.open(ModalInfoMenuComponent);

 

  }
  loadFoods() {
    this.http.get<Food[]>(API_URL + '/food').subscribe(response => {
      this.foods = response;

    
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
       
      
       
        ;
     }

    );
  }
  
}
