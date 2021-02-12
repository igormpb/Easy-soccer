import { Component, OnInit, Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent{

  constructor(public menu: MenuController, private router: Router) { 

  }

  ngOnInit() {
    
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
