import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from '../components/menu-item/menu-item.component';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-cad-time',
  templateUrl: './cad-time.page.html',
  styleUrls: ['./cad-time.page.scss'],
})
export class CadTimePage implements OnInit {

  constructor(private menuItem: MenuItemComponent, private api : ApiService) { }
  cadTeam = {
    nameTeam: "",
    description: "",
    quantity: "",
    iduser: localStorage.getItem("iduser")
  }
  ngOnInit() {
  }
  openCustom(){
    this.menuItem.openCustom();
    
  }

  createTeam(){
    this.api.createTeam("teams/create", this.cadTeam).subscribe(
      res => {
        alert(res.message)
        this.cadTeam.nameTeam = "";
        this.cadTeam.description = "";
        this.cadTeam.quantity = "";
      },
      
      error => alert("Os campos são obrigátorios")
      
    )
  }

} 
