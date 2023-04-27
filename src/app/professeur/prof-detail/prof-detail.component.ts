import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
import { Professeur } from '../prof/modele/professeur';

@Component({
  selector: 'app-prof-detail',
  templateUrl: './prof-detail.component.html',
  styleUrls: ['./prof-detail.component.css']
})
export class ProfDetailComponent implements OnInit {
  idProf!:number;
  Prof!:Professeur;
  constructor(private service:CrudService,private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idProf=this.activatedroute.snapshot.params['idProf']
    this.Prof=new Professeur()
    this.service.getProfesseurById(this.idProf).subscribe(data =>{
     console.log(this.Prof=data);
    })


  }

}
