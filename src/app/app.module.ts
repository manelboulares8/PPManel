import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListerMedicamentComponent } from './admin-dashboard/medicament/lister-medicament/lister-medicament.component';
import { AjouterMedicamentComponent } from './admin-dashboard/medicament/ajouter-medicament/ajouter-medicament.component';
import { ServicceComponent } from './servicce/servicce.component';
import { ModifierMedicamentComponent } from './admin-dashboard/medicament/modifier-medicament/modifier-medicament.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    ListerMedicamentComponent,
    AjouterMedicamentComponent,
    ServicceComponent,
    ModifierMedicamentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,    ReactiveFormsModule,
    RouterModule,


  ],
  providers: [
    provideClientHydration(),
    ServicceComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
