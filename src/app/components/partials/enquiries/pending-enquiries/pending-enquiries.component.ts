import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ApproveComponent } from '../../modals/approve/approve.component';
import { ApproveAssignedComponent } from '../../modals/approve-assigned/approve-assigned.component';
import { trigger, transition, style, animate } from '@angular/animations';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-pending-enquiries',
  templateUrl: './pending-enquiries.component.html',
  styleUrls: ['./pending-enquiries.component.scss'],
  animations:[
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ])
  ]
})

export class PendingEnquiriesComponent implements OnInit {

  isShowToast:boolean = false;
  technicianName:any;
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  approve() {
    const dialogRef = this.dialog.open(ApproveComponent, {
      panelClass: 'custom-dialog-container',
      width: '400px',
      height: 'auto',
    }).afterClosed().subscribe(res => {
      if (res == 'Yes') {
        this.dialog.open(ApproveAssignedComponent, {
          panelClass: 'custom-dialog-container',
          width: '400px',
          height: 'auto',
        }).afterClosed().subscribe(res =>{
          this.technicianName = res;
          this.isShowToast = true;
        })
      }
    });
  }

  closeToast(){
    this.isShowToast = false;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
