import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from '../components/menu-item/menu-item.component';

@Component({
  selector: 'app-cad-time',
  templateUrl: './cad-time.page.html',
  styleUrls: ['./cad-time.page.scss'],
})
export class CadTimePage implements OnInit {

  constructor(private menuItem: MenuItemComponent) { }

  ngOnInit() {
  }
  openCustom(){
    this.menuItem.openCustom();
  }
} 
