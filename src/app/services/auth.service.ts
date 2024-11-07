import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  // Simule une connexion de l'utilisateur
  login() {
    this.loggedIn = true;
  }

  // Simule la déconnexion de l'utilisateur
  logout() {
    this.loggedIn = false;
  }

  // Vérifie si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Exemple de méthode pour obtenir le rôle de l'utilisateur
  getRole(): string {
    return this.loggedIn ? 'user' : ''; // Modifiez selon votre logique (par exemple 'admin', 'user', etc.)
  }
}
