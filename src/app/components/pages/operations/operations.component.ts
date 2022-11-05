import { Component, OnInit } from '@angular/core';
import { NewEnquiriesComponent } from '../../partials/enquiries/new-enquiries/new-enquiries.component';
import { MatDialog } from '@angular/material/dialog';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss'],
  animations:[
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('10ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ])
  ]
})
export class OperationsComponent implements OnInit {

  selectedPage:string = 'all';
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changePages(args:string){
    this.selectedPage = args
  }

  addUser(){
    const dialogRef = this.dialog.open(NewEnquiriesComponent,{
      panelClass: 'custom-dialog-container',
      width:'600px',
      height:'auto',
      // data:{

      // },
    });
  }

}
