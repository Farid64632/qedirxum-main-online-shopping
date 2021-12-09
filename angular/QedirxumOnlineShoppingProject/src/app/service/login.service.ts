import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
userLogin:EventEmitter<boolean>=new EventEmitter();
userRoles:EventEmitter<string[]>=new EventEmitter();

  constructor() { }
}
