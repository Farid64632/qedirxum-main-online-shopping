import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { API_URL } from '../constant';
import { ManagerCreateComponent } from '../manager-create/manager-create.component';
import { User } from '../models/user';
import { AllLoadService } from '../service/all-load.service';

@Component({
  selector: 'app-manager-table',
  templateUrl: './manager-table.component.html',
  styleUrls: ['./manager-table.component.css']
})

export class ManagerTableComponent implements OnInit {
  users: User[] = [];
bool:boolean=false; 
  constructor(public dialog:MatDialog,private http:HttpClient,private serviceLoad:AllLoadService) { }

  ngOnInit(): void {
    
    
    this.loadManagers();
 this.load();
 
  }
  openDialog(){
    this.dialog.open(ManagerCreateComponent);

  }

  load(){
    setInterval(() => {
      
      if (this.serviceLoad.managerLoad==1) {
        this.bool=true;
       
       }
      if (this.bool==true){
this.loadManagers();
this.serviceLoad.managerLoad=0;  
      } 
        
      },100);
  
    }
  loadManagers(){
    this.http.get<[]>(API_URL+'/get-managers').subscribe(
      response=>{
        this.users=response;
       
       console.log(this.users);
       
        ;
     }

    );
  }
}
