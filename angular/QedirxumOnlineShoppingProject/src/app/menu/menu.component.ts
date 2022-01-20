import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
		trigger('inOutAnimation', [
			transition(':enter', [
				style({ height: 0, opacity: 0 }),
				animate('0.4s ease-out', style({ height: 300, opacity: 1 }))
			]),
			transition(':leave', [
				style({ height: 300, opacity: 1 }),
				animate('0.4s ease-in', style({ height: 0, opacity: 0 }))
			])
		])
	]
})
export class MenuComponent implements OnInit {
roles:string[]=[];
userLoggedin:boolean=false;
visiblescroll:boolean=true;

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

  @HostListener('window:scroll',['$event'])   onscroll(){
  
    if (window.scrollY>100) {
      this.visiblescroll=false;
       }else{
      this.visiblescroll=true;
    
    }
  }
}