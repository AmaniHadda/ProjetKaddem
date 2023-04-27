import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/shared/services/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  nbEquipe:number;
  nbEquipeJ:number;
  nbEquipeEx:number;
  constructor(private Se :EquipeService) { }

  ngOnInit(): void {
    this.Se.getNbEquipe().subscribe(data=>this.nbEquipe=data);
    this.Se.getNbEquipeByNiveau("JUNIOR").subscribe(data=>this.nbEquipeJ=data)
    this.Se.getNbEquipeByNiveau("EXPERT").subscribe(data=>this.nbEquipeEx=data)
  }

}
