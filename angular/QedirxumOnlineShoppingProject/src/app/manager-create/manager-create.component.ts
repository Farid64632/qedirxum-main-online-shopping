import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { API_URL } from '../constant';
import { User } from '../models/user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-manager-create',
  templateUrl: './manager-create.component.html',
  styleUrls: ['./manager-create.component.css']
})
export class ManagerCreateComponent implements OnInit {

  user:User=new User();
  constructor(private http:HttpClient,private router:Router,private loginS:LoginService,public dialogRef: MatDialogRef<ManagerCreateComponent>){ }

  ngOnInit(): void {
  }

  onCreateManager(){
    console.log('ss');
    localStorage.setItem('loadManagers','1')
    this.http.post(API_URL +'/signupmanager',this.user)
 .subscribe(
    error =>{
      this.dialogRef.close();
      }
  );
  }
}
