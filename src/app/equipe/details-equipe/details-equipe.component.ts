import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { delay, delayWhen } from 'rxjs';
import { DetailEquipe } from 'src/app/shared/model/DetailEquipe';
import { Equipe } from 'src/app/shared/model/Equipe';

@Component({
  selector: 'app-details-equipe',
  templateUrl: './details-equipe.component.html',
  styleUrls: ['./details-equipe.component.css']
})
export class DetailsEquipeComponent implements OnInit {
  show:any=true;
  detailEquipe:DetailEquipe;
  cheminImg:any;
  constructor() { }
  @Input() equipe:Equipe;

  

  ngOnInit(): void {
    this.cheminImg=this.equipe.img;
    
  }

   init(){
    this.show=false;
   }

}
