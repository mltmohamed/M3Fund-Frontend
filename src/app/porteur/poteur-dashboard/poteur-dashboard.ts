import { Component, signal } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Navbar } from "../navbar/navbar";
import { CardProject } from "../card-project/card-project";
import { CardCampaign } from "../card-campaign/card-campaign";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-poteur-dashboard',
  imports: [Sidebar, Navbar, CardProject, CardCampaign],
templateUrl: './poteur-dashboard.html',
  styleUrl: './poteur-dashboard.css'
})
export class PoteurDashboard {
   protected readonly title = signal('M3Fund');
}
