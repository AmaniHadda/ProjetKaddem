import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipe } from 'src/app/shared/model/Equipe';
import { EquipeService } from 'src/app/shared/services/equipe.service';
import { ListEquipeComponent } from '../list-equipe/list-equipe.component';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {
  @ViewChild(ListEquipeComponent) private ListEquipeChild: ListEquipeComponent;
  idEquipe:number;
  constructor(private ac :ActivatedRoute, private sEq:EquipeService) { }

  ngOnInit(): void {
    

  }
  
  

}
