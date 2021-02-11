import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {
  user = {
    email: "",
    name: "",
    password: "",
    repeatPassword: ""
  }
  constructor(private api : ApiService) { }

  ngOnInit() {
  }
  
  createAccount(){
    if(this.user.repeatPassword != this.user.password){
      alert('senhas não são iguais!!')
    }
      this.api.create('users/create',this.user).subscribe(
        res => console.log(res), 
        error=>console.log(error)
        )
   
    
  }
  
}
