import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./porteur/navbar/navbar";
import { Sidebar } from "./porteur/sidebar/sidebar";
import { CardProject } from "./porteur/card-project/card-project";
import { CardCampaign } from "./porteur/card-campaign/card-campaign";
import { Footer } from "./porteur/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, CardProject, CardCampaign, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('M3Fund');
}
