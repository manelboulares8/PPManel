import { Component, OnInit } from '@angular/core';
import { medicament } from '../model/medicament';

@Component({
  selector: 'app-servicce',
  templateUrl: './servicce.component.html',
  styleUrl: './servicce.component.css'
})
export class MedicamentServices implements OnInit {
  medicament! : medicament[];
  medicamentt! :medicament;
  constructor() {
 
    
      this.medicament= [
        { id:1,nom:"Doliprane",barCode:"8765433",prix:5000,qteS:45},
        { id:2,nom:"SpasmoCalm",barCode:"1234567",prix:5800,qteS:60},
        { id:3,nom:"DoliRhume",barCode:"6543203",prix:3350,qteS:100},
        { id:4,nom:"Panadol",barCode:"0987654",prix:9000,qteS:120},



    
         ];
        
    }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    listerMedicament():medicament [] {
      return this.medicament;}

      ajouterMedicament(med : medicament){
        this.medicament.push(med);
      }
      supprimerMedicament(med :medicament){
        //supprimer le produit prod du tableau produits
        const index = this.medicament.indexOf(med, 0);
        if (index > -1) {
        this.medicament.splice(index, 1);
        }
        //ou Bien
        /* this.produits.forEach((cur, index) => {
        if(prod.idIProduit === cur.idIProduit) {
        this.produits.splice(index, 1);
        }
        }); */
        }
      
      consulterMedicament(id:number):medicament{
        return   this.medicamentt = this.medicament.find(e => e.id == id)!;
       
        }
        trierMedicament(){
          this.medicament = this.medicament.sort((n1,n2) => {
          if (n1.id! > n2.id!) {
          return 1;
          }
          if (n1.id! < n2.id!) {
          return -1;
          }
          return 0;
          });
          }

}
