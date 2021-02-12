import { Router } from '@angular/router';

import { ModalController, NavController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  editUserProfiles: any

  user = {
    name: "",
    bio: ""
  };
  iduser = localStorage.getItem('iduser');
  constructor(private modalController: ModalController, private api: ApiService,private router: Router, private location: Location) { }
  @Input() data: [];
  
  ngOnInit() {
  
  }
  ionViewDidEnter(){
    this.editUserProfiles = this.data;
    this.user.name = this.editUserProfiles[0].name;
    this.user.bio = this.editUserProfiles[0].bio;
  }
  sair(){
    console.log(this.user.name);
    this.modalController.dismiss();
  }

  updateProfile(){
    this.api.updateUser('users/edit',this.iduser,this.user).subscribe(
      res =>{
        this.modalController.dismiss();
        location.reload();
      }
    )
  }
}
