import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {

  constructor(public menu: MenuController, private router: Router) { 

  }

  ngOnInit() {
    if(!localStorage.getItem('auth')){
      this.router.navigate(['/login'])
    }
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

 logout(){
   localStorage.removeItem("auth");
   localStorage.removeItem("name");   
   this.router.navigate(['/login'])
   
 }

}
