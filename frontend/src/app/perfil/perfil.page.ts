import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.css'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('auth')){
      this.router.navigate(['/login'])
    }
  }
}
