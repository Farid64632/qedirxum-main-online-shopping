import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from '../constant';
import { Food } from '../models/food';
import { AllIdService } from '../service/all-id.service';

@Component({
  selector: 'app-modal-info-menu',
  templateUrl: './modal-info-menu.component.html',
  styleUrls: ['./modal-info-menu.component.css']
})
export class ModalInfoMenuComponent implements OnInit {
idModel:number=0;
food:Food=new Food();
imagePath: string = '';
  constructor(private idService:AllIdService,private http:HttpClient) { }

  ngOnInit(): void {
    
    this.imagePath = API_URL + '/files/files/';
this.idModel=this.idService.idModalInfoMenu;

this.foodGetById(this.idModel);
     }


  foodGetById(id:number){
    this.http.get<Food>(API_URL + '/food/get/'+id).subscribe(response => {
      this.food = response;

     
    });
  }

   

}
