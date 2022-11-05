import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEquipmentsComponent } from '../../partials/inventory/add-equipments/add-equipments.component';
import { AddUserComponent } from '../../partials/users/add-user/add-user.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  selectedPage:string = 'all';
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changePages(args:string){
    this.selectedPage = args
  }

  addInventory(){
    const dialogRef = this.dialog.open(AddEquipmentsComponent,{
      panelClass: 'custom-dialog-container',
      width:'600px',
      height:'auto',
      // data:{

      // },
    });
  }
}
