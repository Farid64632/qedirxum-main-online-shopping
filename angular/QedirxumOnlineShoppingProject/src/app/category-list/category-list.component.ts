import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { API_URL } from '../constant';
import { ManagerCreateComponent } from '../manager-create/manager-create.component';
import { Category } from '../models/category';
import { User } from '../models/user';
import { AllLoadService } from '../service/all-load.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  bool:boolean=false;
  popoverTitle:string='Təsdiq';
  popoverMessage:string='Kategoriya Silme prosesini təsdiqləməyə əminsiniz?';
  constructor(    private http:HttpClient,private router:Router,private serviceLoad:AllLoadService) { }

  ngOnInit(): void {
    console.log(this.serviceLoad.categoryLoad)
  
this.loadCategories();
this.load()
  }
  deleteCategoryById(id:number){
  
    this.http.delete(API_URL+'/categories/'+id).subscribe(
      resp=>{
      
     this.loadCategories();

      }
   );
  }
  

  load(){
   
    setInterval(() => {
      if (this.serviceLoad.categoryLoad==1) {

        this.bool=true;
      
       }
       if (this.bool==true){
        this.loadCategories();
       this.serviceLoad.categoryLoad=0;
        
            } 
        
      },1);
  
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
