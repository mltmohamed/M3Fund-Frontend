import { Routes } from '@angular/router';
import { PoteurDashboard } from './porteur/poteur-dashboard/poteur-dashboard';
import { App } from './app';

export const routes: Routes = [
{ path: '', component: App }, // page d'accueil
{ path: '**', redirectTo: '' },
{path:'/dashboard', component:PoteurDashboard}// redirige toute URL inconnue vers l'accueil
];
