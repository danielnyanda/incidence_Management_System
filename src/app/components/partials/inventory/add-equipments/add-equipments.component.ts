import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-equipments',
  templateUrl: './add-equipments.component.html',
  styleUrls: ['./add-equipments.component.scss']
})
export class AddEquipmentsComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AddEquipmentsComponent>
  ) {

   }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()
  }

}
