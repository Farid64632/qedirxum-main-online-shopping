import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AllLoadService {
  foodLoad:number=0;
  managerLoad:number=0;
  inqridientLoad:number=0;
  categoryLoad:number=0;
   
  constructor() { }
}
