import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { API_URL } from '../constant';
import { ManagerCreateComponent } from '../manager-create/manager-create.component';
import { User } from '../models/user';

@Component({
  selector: 'app-manager-table',
  templateUrl: './manager-table.component.html',
  styleUrls: ['./manager-table.component.css']
})

export class ManagerTableComponent implements OnInit {
  users: User[] = [];
 
  constructor(public dialog:MatDialog,private http:HttpClient) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadManagers();
    }, 2000);
    this.loadManagers();
 
 
  }
  openDialog(){
    this.dialog.open(ManagerCreateComponent);

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
