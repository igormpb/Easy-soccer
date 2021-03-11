import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MenuItemComponent } from '../components/menu-item/menu-item.component';
@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.page.html',
  styleUrls: ['./my-team.page.scss'],
})
export class MyTeamPage implements OnInit {

  constructor(private api: ApiService,private menuItem: MenuItemComponent) { }
  members: any
  team:any
  errors: any
  private iduser = localStorage.getItem('iduser');
  
  ngOnInit() {
  }

  ionViewWillEnter(){
    
    this.showMembers();
  }

  showMembers(){
    this.api.getMembers("teams/members", this.iduser).subscribe(
      res =>{
        this.members = res.members
        this.team = res.resTeam
      },
    )
  }
  openCustom(){
    this.menuItem.openCustom();
  }
}
