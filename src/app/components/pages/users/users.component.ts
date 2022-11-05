import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../../partials/users/add-user/add-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
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

export class UsersComponent implements OnInit {

  selectedPage:string = 'all';
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changePages(args:string){
    this.selectedPage = args
  }

  addUser(){
    const dialogRef = this.dialog.open(AddUserComponent,{
      panelClass: 'custom-dialog-container',
      width:'600px',
      height:'auto',
      // data:{

      // },
    });
  }

}
