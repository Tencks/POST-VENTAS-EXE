import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ApiDRFService } from '../../Core/Services/api-drf.service';
import { LoginI, ResponseI, TokenI } from '../../Core/Interfaces/Auth/Login.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    user_id: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  LogoutButton = new FormGroup({
    token : new FormControl('', Validators.required)
  })

  tokenActual = localStorage.getItem('token');

  constructor(private api:ApiDRFService,private formBuilder:FormBuilder,private router:Router){}

  

  ngOnInit(): void {
    
    this.checkLocalStorage()

  }

  checkLocalStorage (){
    if(localStorage.getItem('token')){
      this.router.navigate(['clientes'])
    }
  }

  onLogin(form: LoginI) {
    this.api.loginUser(form).subscribe(data => {
      console.log(data);
      let dataResponse: ResponseI = data;
      console.log(dataResponse);
      if (dataResponse.token != null) {
        localStorage.setItem('token',dataResponse.token);  
        localStorage.setItem('cargo',dataResponse.cargo);
        localStorage.setItem('id',dataResponse.id);
        console.log("Login successful");
        this.router.navigate(['clientes']);
      }
    })
  }


  onLogout(form: TokenI){
    this.api.LogoutUser(form).subscribe(data =>{
      console.log(data);
      let tokenResponse:TokenI = data;
      console.log(tokenResponse);
    })
  }

}