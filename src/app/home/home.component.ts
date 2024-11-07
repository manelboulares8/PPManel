import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  userRole: string = '';  // 'admin' ou 'user'

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Vérifier si l'utilisateur est connecté et récupérer son rôle
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userRole = this.authService.getRole(); // Utiliser le rôle récupéré de AuthService
  }
}
