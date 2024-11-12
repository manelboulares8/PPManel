import { Component, OnInit } from '@angular/core';
import { medicament } from '../../../model/medicament';
import { ServicceComponent } from '../../../servicce/servicce.component';
import { Router } from '@angular/router';

import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-medicament',
  templateUrl: './ajouter-medicament.component.html',
  styleUrl: './ajouter-medicament.component.css'
})
export class AjouterMedicamentComponent implements OnInit {
    newMedicament =new medicament();
    myForm! :FormGroup;


  

  constructor(private servicceComponent :ServicceComponent,private router:Router,private formBuilder :FormBuilder){

  }
  ngOnInit(): void {
    this.newMedicament.id = this.servicceComponent.getNextId();

    this.myForm = this.formBuilder.group({
     id:['',[Validators.required,]],

      nom : ['', [Validators.required,Validators.minLength(3)]],
      barCode:['', [Validators.required, this.cinLengthValidator()]],
      prix :['',[Validators.required,]],
      qteS : ['', [Validators.required]],
      } );
    
    }
    cinLengthValidator(): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        if (value !== null && value !== undefined && value.toString().length !== 8) {
          return { 'cinLength': true }; // Retourne une erreur si la longueur n'est pas de 8
        }
        return null; // Pas d'erreur
      };
    }

    addMedicament(){
      console.log(this.newMedicament);
      this.servicceComponent.ajouterMedicament(this.newMedicament);
      this.router.navigate([['/admin-dashboard/medicament/listerMedicament']]);
      
      
    }
  }

