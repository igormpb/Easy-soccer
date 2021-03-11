
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { NavController, ModalController } from '@ionic/angular';
import { ModalPage } from '../components/modal/modal.page';
import { MenuItemComponent } from '../components/menu-item/menu-item.component';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.css'],
})

@Injectable({
  providedIn: 'root'
})

export class PerfilPage implements OnInit {
  userProfiles: any
  constructor(private router: Router,private api: ApiService, private modalController: ModalController, private menuItem: MenuItemComponent) { }
  private iduser = localStorage.getItem('iduser');
  ngOnInit() {
    if(!localStorage.getItem('auth')){
      this.router.navigate(['/login']);
      
    }  
  }

  async ionViewWillEnter(){
    await this.getuser();
  }

  async updateUser(){
    let profileModal = await this.modalController.create({
      component: ModalPage,
      componentProps:{
        "data": this.userProfiles,


      }
    });
    profileModal.present();
    profileModal.onDidDismiss();
  }
  getuser(){
    this.api.getUser('users',this.iduser).subscribe(
     
      res =>{
        this.userProfiles = res;
      }
    )
  }

  openCustom(){
    this.menuItem.openCustom();
  }
}
