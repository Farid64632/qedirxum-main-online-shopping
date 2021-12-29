import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from '../constant';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category:Category=new Category();
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  onCreateCategory(){
       localStorage.setItem('loadCategories','1')
    this.http.post(API_URL +'/categories',this.category)
 .subscribe(
    error =>{
   
      }
  );
  }

}
