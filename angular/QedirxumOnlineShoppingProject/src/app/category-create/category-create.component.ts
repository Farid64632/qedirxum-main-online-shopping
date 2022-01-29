import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from '../constant';
import { Category } from '../models/category';
import { AllLoadService } from '../service/all-load.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category:Category=new Category();
  constructor(private http:HttpClient,private router:Router,private serviceLoad:AllLoadService) { }

  ngOnInit(): void {
  }
  onCreateCategory(){
this.serviceLoad.categoryLoad=1;

    this.http.post(API_URL +'/categories',this.category)
 .subscribe(
    error =>{
   
      }
  );
  }

}
