import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuItemComponent } from '../components/menu-item/menu-item.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menu: MenuController, private router: Router, private menuItem: MenuItemComponent) { }


  ngOnInit() {
    if(!localStorage.getItem('auth')){
      this.router.navigate(['/login'])
    }
  }
  openCustom() {
    this.menuItem.openCustom()
  }
}
