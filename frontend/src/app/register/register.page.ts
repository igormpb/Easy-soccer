import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
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
  constructor(private api : ApiService,private router: Router) { }

  ngOnInit() {
  }
  
  createAccount(){
    if(this.user.email =="" || this.user.name =="" || this.user.password =="" || this.user.repeatPassword =="" ){
      alert('Os campos são obrigatório!')
    }
    if(this.user.repeatPassword != this.user.password){
      alert('senhas não são iguais!!')
    }
      this.api.account('users/create',this.user).subscribe(
        res => {
          alert(res.message)
          this.router.navigate(['/login'])
        }, 
        error=>console.log(error)
        )
  }

}
