import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  selectedPage:string = 'dashboard';

  constructor() { }

  ngOnInit(): void {
  }

  onChangePage(page:string){
    this.selectedPage = page;
  }

}
