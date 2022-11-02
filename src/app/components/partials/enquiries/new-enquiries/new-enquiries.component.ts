import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-enquiries',
  templateUrl: './new-enquiries.component.html',
  styleUrls: ['./new-enquiries.component.scss']
})
export class NewEnquiriesComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NewEnquiriesComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()
  }
}
