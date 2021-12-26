import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
roles:string[]=[];
userLoggedin:boolean=false;
  constructor(private loginSerice:LoginService,private router:Router) { }

  ngOnInit(): void {
this.loginSerice.userLogin.subscribe(
resp=>{

  this.userLoggedin=resp;
}

);

this.loginSerice.userRoles.subscribe(
  resp=>{
  
    this.roles=resp;
  }
  
  );

  }

  toManager(){
    this.router.navigate(['manager-t']);
  }
}