import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Méthode pour gérer la soumission du formulaire de connexion
  login() {
    if (this.email === 'user@example.com' && this.password === 'password123') {
      this.authService.login();
      this.router.navigate(['/home']); // Redirige vers la page d'accueil après connexion
    } else {
      this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
    }
  }
}
