import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from "./porteur/navbar/navbar";
import { Sidebar } from "./porteur/sidebar/sidebar";
import { PoteurDashboard } from "./porteur/poteur-dashboard/poteur-dashboard";
import { Footer } from "./porteur/footer/footer";
import { IntroRegister } from "./register/intro-register/intro-register";
import { filter } from 'rxjs/operators';
import { RegisterIndividu } from "./register/register-individu/register-individu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, PoteurDashboard, Footer, RouterLink, IntroRegister, RegisterIndividu],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  
})
export class App {
  protected readonly title = signal('M3Fund');
  isHomePage = false;

  constructor(private router: Router) {}
}
