import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { API_URL } from '../constant';
import { ManagerCreateComponent } from '../manager-create/manager-create.component';
import { Category } from '../models/category';
import { User } from '../models/user';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  popoverTitle:string='Təsdiq';
  popoverMessage:string='Kategoriya Silme prosesini təsdiqləməyə əminsiniz?';
  constructor(    private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
this.loadCategories();
  }
  deleteCategoryById(id:number){
  
    //this.http.delete(API_URL+'/categories/'+id).subscribe(
    //  resp=>{
   //   
   //  this.loadCategories();

   //   }
   // );
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
