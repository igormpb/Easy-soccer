import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {
  user = {
    email: "",
    password: "",
  }
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  loginAccount(){
    if(this.user.email =="" || this.user.password ==""  ){
      alert('Os campos são obrigatório!')
      this.router.navigate(["/login"]);
    }

    this.api.account('users/login',this.user).subscribe(
      res => {
        console.log(res.token)
        if(res.name || res.auth){
          localStorage.setItem("iduser", res.iduser);

          
          localStorage.setItem("auth",res.auth);
          this.router.navigate(['/home']);
        }else{
          alert('Senha ou usuário incorreto!');
          this.router.navigate(["/login"]);
        }
       
      }, 
      error=>console.log(error)
    )
  }

}
