import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import path from 'path';
import { ListerMedicamentComponent } from './admin-dashboard/medicament/lister-medicament/lister-medicament.component';
import { AjouterMedicamentComponent } from './admin-dashboard/medicament/ajouter-medicament/ajouter-medicament.component';
import { ModifierMedicamentComponent } from './admin-dashboard/medicament/modifier-medicament/modifier-medicament.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Route pour la page d'accueil
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent,
    children:
    [{path : 'medicament/listerMedicament',component:ListerMedicamentComponent},
      { path: '', redirectTo: 'medicament/listerMedicament', pathMatch: 'full' },
      {path : 'medicament/ajouterMedicament',component:AjouterMedicamentComponent},
      //{path : 'medicament/modifierMedicament',component:ModifierMedicamentComponent},
      { path: 'medicament/modifierMedicament/:id', component: ModifierMedicamentComponent },  // Modifié ici


  
  ] },
  { path: '**', redirectTo: '' }  // Redirige vers la page d'accueil pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
