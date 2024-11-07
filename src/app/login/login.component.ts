import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  userType: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin@example.com' && this.password === 'admin' && this.userType === 'admin') {
      // Redirection pour l'admin
      this.router.navigate(['/admin-dashboard']);
    } else if (this.email === 'caissier@example.com' && this.password === 'caissier' && this.userType === 'caissier') {
      // Redirection pour le caissier
      this.router.navigate(['/caissier-dashboard']);
    } else {
      this.errorMessage = 'Identifiants ou type d\'utilisateur incorrects';
    }
  }
}
