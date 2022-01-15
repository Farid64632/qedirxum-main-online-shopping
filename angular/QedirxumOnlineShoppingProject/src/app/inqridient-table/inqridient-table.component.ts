import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { API_URL } from '../constant';
import { InqridientCreateComponent } from '../inqridient-create/inqridient-create.component';
import { Inqridient } from '../models/inqridient';
import { AllLoadService } from '../service/all-load.service';

@Component({
  selector: 'app-inqridient-table',
  templateUrl: './inqridient-table.component.html',
  styleUrls: ['./inqridient-table.component.css']
})
export class InqridientTableComponent implements OnInit {
bool:boolean=false;
  inqiridents:Inqridient[]=[];
  popoverTitle:string='Təsdiq';
  popoverMessage:string='Inqridient Silme prosesini təsdiqləməyə əminsiniz?';
  constructor(private http:HttpClient,  public dialog: MatDialog,private serviceLoad:AllLoadService) { }


  openDialog() {
    this.dialog.open(InqridientCreateComponent);
  }
  ngOnInit(): void {
    this.serviceLoad.inqridientLoad.subscribe(
      resp=>{
      
        this.bool=resp;
      }
      
      );
    this.loadInqridients();
    this.load();
  }


  loadInqridients() {
    this.http.get<Inqridient[]>(API_URL + '/inqridients').subscribe(response => {
      this.inqiridents = response;

      console.log(this.inqiridents);
    });
  }
  load(){
    setInterval(() => {
      if (this.bool==true){
  this.loadInqridients();
this.serviceLoad.inqridientLoad.emit(false);
  
      } 
        
      },100);
  
    }

    deleteInqridientById(id:number){
      this.http.delete(API_URL+'/inqridients/'+id).subscribe(
        resp=>{
        
       this.loadInqridients();
  
        }
     );
    }
}
