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
  private iduser = localStorage.getItem("iduser")
  data: any
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

  joinTeam(idTeam){
     this.data = {
      idTeam: idTeam,
      iduser: this.iduser
    }
    this.api.joinTeam("teams/join",this.data).subscribe(
      res =>  alert(res.message)
    )
  }
}
