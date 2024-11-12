import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  email: string = '';
  password: string = '';
  userType: string = '';  // Type de l'utilisateur (admin ou caissier)
  errorMessage: string = '';
  myForm! :FormGroup;


  constructor(private router: Router, private authService: AuthService,private formBuilder :FormBuilder) {}
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({

      password: [
        '', 
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/)
        ]],
       userType:['', [Validators.required]],

    email : ['', [Validators.required, Validators.email]],
      } );
  }



  login() {
    if (this.email === 'admin@example.com' && this.password === 'admin' && this.userType === 'admin') {
      this.authService.login('admin');  // Passer le rôle "admin"
      this.router.navigate(['/admin-dashboard']);
    } else if (this.email === 'caissier@example.com' && this.password === 'caissier' && this.userType === 'caissier') {
      this.authService.login('caissier');  // Passer le rôle "caissier"
      this.router.navigate(['/caissier-dashboard']);
    } else {
      this.errorMessage = 'Identifiants ou type d\'utilisateur incorrects';
    }
  }
}


