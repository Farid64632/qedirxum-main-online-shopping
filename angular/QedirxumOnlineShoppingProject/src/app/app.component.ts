import { Component,OnInit } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  constructor(private loginS:LoginService) { }
  title = 'QedirxumOnlineShoppingProject';

  ngOnInit(): void {
    
    var roles:string[];
    var tokenGlobalString = localStorage.getItem("userRoles");
if (tokenGlobalString == null) {
  localStorage.setItem('userLogin','false');
  localStorage.setItem('userRoles', '');
} else {
  
 roles =[tokenGlobalString];
 console.log(roles);

 if (localStorage.getItem('userLogin') =='true') {
  setTimeout(() => { 
    this.loginS.userLogin.emit(true);
    this.loginS.userRoles.emit(roles);
    
     }, 10);
 }

}

   
}

 




      }

