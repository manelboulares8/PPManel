import { Component, OnInit } from '@angular/core';
import { medicament } from '../../../model/medicament';
import { ServicceComponent } from '../../../servicce/servicce.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-medicament',
  templateUrl: './lister-medicament.component.html',
  styleUrl: './lister-medicament.component.css'
})
export class ListerMedicamentComponent implements OnInit{
  medicament! :medicament[];
  constructor(private servicceComponent :ServicceComponent,private router: Router){
    this.medicament = servicceComponent.listerMedicament();


  }
  ngOnInit(): void {
  }
  supprimerMedicament(m : medicament){
    //console.log(e);
    let conf =confirm("vous etes sur ?");
    if (conf)
      this.servicceComponent.supprimerMedicament(m);

  }
  modifierMedicament(id: number) {
    this.router.navigate(['/admin-dashboard/medicament/modifierMedicament', id]);
}

}
