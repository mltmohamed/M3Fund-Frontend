import { Routes } from '@angular/router';
import { PoteurDashboard } from './porteur/poteur-dashboard/poteur-dashboard';
import { App } from './app';
import { IntroRegister } from './register/intro-register/intro-register';
import { RegisterIndividu } from './register/register-individu/register-individu';

export const routes: Routes = [
{ path: '', component: IntroRegister }, // page d'accueil
{path:'dashboard', component:PoteurDashboard},// redirige toute URL inconnue vers l'accueil
{path :'register', component:IntroRegister},
{path:'registerIndividu', component:RegisterIndividu},
{ path: '**', redirectTo: '' },
];
