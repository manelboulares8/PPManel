import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHomePage: boolean = true;
  constructor(public authService: AuthService, private router: Router) {
    this.router.events.subscribe((event) => {
      this.isHomePage = this.router.url === '/'|| this.router.url === '/login'; 
    });
  }

  // Méthode pour déconnecter l'utilisateur
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirige vers la page de login après la déconnexion
  }
}
