import { MenuController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';

import { MenuItemComponent } from '../components/menu-item/menu-item.component';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.page.html',
  styleUrls: ['./search-team.page.css'],
})
export class SearchTeamPage implements OnInit {
  constructor(private menu: MenuController, private menuItem: MenuItemComponent) { }

  ngOnInit() {
  }
  openCustom() {
    this.menuItem.openCustom()
  }

}
