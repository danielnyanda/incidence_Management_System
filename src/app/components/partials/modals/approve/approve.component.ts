import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss']
})
export class ApproveComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ApproveComponent>) { }

  ngOnInit(): void {
  }

  close(args:string){
    this.dialogRef.close(args)
  }
}
