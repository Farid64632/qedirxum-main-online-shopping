import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class HttpInterSectorService implements HttpInterceptor {

  
  intercept(request:HttpRequest<any>,next:HttpHandler){
    let token=localStorage.getItem('token');
    if(token){
      request = request.clone(
        {
          setHeaders: {
            Authorization: token
          }
        }
      );
    }
   
  
    return next.handle(request);

  }
  constructor() { }
}
