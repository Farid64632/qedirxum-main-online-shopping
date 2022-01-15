import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AllLoadService {
  foodLoad:EventEmitter<boolean>=new EventEmitter();
  managerLoad:EventEmitter<boolean>=new EventEmitter();
  inqridientLoad:EventEmitter<boolean>=new EventEmitter();
  categoryLoad:EventEmitter<boolean>=new EventEmitter();
   
  constructor() { }
}
