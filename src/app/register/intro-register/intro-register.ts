import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { RegisterIndividu } from '../register-individu/register-individu';

@Component({
  selector: 'app-intro-register',
  imports: [],
  templateUrl: './intro-register.html',
  styleUrl: './intro-register.css'
})
export class IntroRegister {
  constructor(private router:Router){}
  goToRegisterIndividu(){
    this.router.navigate(['/registerIndividu']);
  }
    goToRegisterAssociation(){
    this.router.navigate(['/registerAssociation']);
  }
    goToRegisterEnterprise(){
    this.router.navigate(['/registerEnterprise']);
  }
}
