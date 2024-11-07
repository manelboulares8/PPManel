import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  isLoggedIn: boolean = false;
  userRole: string = ''; // 'admin' ou autre rôle

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Vérifier si l'utilisateur est connecté et récupérer son rôle
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userRole = this.authService.getRole();
  }

  logout(): void {
    // Appel à la méthode de déconnexion du service d'authentification
    this.authService.logout();
    this.router.navigate(['/home']); // Redirection vers la page d'accueil après la déconnexion
  }
}
