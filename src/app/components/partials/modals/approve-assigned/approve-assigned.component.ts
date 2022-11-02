import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-approve-assigned',
  templateUrl: './approve-assigned.component.html',
  styleUrls: ['./approve-assigned.component.scss']
})
export class ApproveAssignedComponent implements OnInit {

  assignForm:FormGroup;
  constructor(
    private dialogRef: MatDialogRef<ApproveAssignedComponent>,
    private fb:FormBuilder) {
      this.assignForm = fb.group({
        technician:'Select a technician'
      })
    }

  ngOnInit(): void {
  }

  close(){
    let args = this.assignForm.get('technician')?.value
    this.dialogRef.close(args);
  }

}
