import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {
  user = {
    email: "",
    password: "",
    repeatPassword: ""
  }
  constructor() { }

  ngOnInit() {
  }

  
}
