import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  isSelected: string = 'dashboard';

  @Output() selectedPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(args:string){
    this.isSelected=args
    this.selectedPage.emit(args);
  }

}
