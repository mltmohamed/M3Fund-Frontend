import { Routes } from '@angular/router';
import { PoteurDashboard } from './porteur/poteur-dashboard/poteur-dashboard';
import { App } from './app';
import { IntroRegister } from './register/intro-register/intro-register';
import { RegisterIndividu } from './register/register-individu/register-individu';
import { RegisterAssociation } from './register/register-association/register-association';
import { RegisterEnterprise } from './register/register-enterprise/register-enterprise';

export const routes: Routes = [
{ path: '', component: IntroRegister }, // page d'accueil
{path:'dashboard', component:PoteurDashboard},// redirige toute URL inconnue vers l'accueil
{path :'register', component:IntroRegister},
{path:'registerIndividu', component:RegisterIndividu},
{path:'registerAssociation', component:RegisterAssociation},
{path:'registerEnterprise', component:RegisterEnterprise },
{ path: '**', redirectTo: '' },
];
