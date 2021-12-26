import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodCreateComponent } from '../food-create/food-create.component';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css']
})
export class FoodTableComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  openDialog(){
    this.dialog.open(FoodCreateComponent);

  }
  ngOnInit(): void {
  }

}
