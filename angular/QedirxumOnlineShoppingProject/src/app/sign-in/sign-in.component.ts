import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from '../constant';
import { User } from '../models/user';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  user:User=new User();
  constructor(private http:HttpClient,private router:Router,private loginS:LoginService) {}

  ngOnInit(): void {}

  onSignUp(){
    console.log('ss');
      this.http.post(API_URL +'/signup',this.user)
   .subscribe(
      error =>{
      
      }
    );

}}
