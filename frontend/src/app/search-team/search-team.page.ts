import { MenuController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';

import { MenuItemComponent } from '../components/menu-item/menu-item.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.page.html',
  styleUrls: ['./search-team.page.css'],
})
export class SearchTeamPage implements OnInit {
  constructor(private menu: MenuController, private menuItem: MenuItemComponent, private api: ApiService) { }
  teams:any
  fkteam:[]
  ngOnInit() {
  }
  openCustom() {
    this.menuItem.openCustom()
  }

 async ionViewWillEnter(){
     this.listTeams();    
      
  }

  listTeams(){
    this.api.getTeams('teams/list').subscribe(
      res=> this.teams = res
    )
  }
}
