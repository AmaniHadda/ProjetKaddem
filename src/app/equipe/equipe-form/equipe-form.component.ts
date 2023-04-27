import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailEquipe } from 'src/app/shared/model/DetailEquipe';

import { Equipe } from 'src/app/shared/model/Equipe';
import { EquipeService } from 'src/app/shared/services/equipe.service';



@Component({
  selector: 'app-equipe-form',
  templateUrl: './equipe-form.component.html',
  styleUrls: ['./equipe-form.component.css']
})
export class EquipeFormComponent implements OnInit {
  idEquipe:number=0;
  equipes:Equipe[];
  equipe :Equipe=new Equipe();
  Message:String;
  
  constructor(private sEq:EquipeService, private _router:Router, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.Message='';
    this.ac.paramMap.subscribe(res=>{this.idEquipe =+res.get('idEquipe')}) 
   if(this.idEquipe!=0){
    this.sEq.getEquipe(this.idEquipe).subscribe(res=>this.equipe=res)
    console.log(this.idEquipe) }   
  }
  onSubmit(){
    this.ac.paramMap.subscribe(res=>this.idEquipe =+res.get('idEquipe'));
    if(!this.idEquipe)
    {
      this.sEq.addEquipe(this.equipe).subscribe();
      //this.sEq.affecter(this.idEquipe,this.detailEquipe).subscribe();
      console.log("added")
      this.Message="added successfully !"

    }
    else{
      this.sEq.UpdateEquipe(this.equipe).subscribe();
      console.log("updated")
      this.Message="updated successfully !"
    }
    
  }
  
  validation(){
      return {'font-size':' 21 px'};
  }
  
  
  
  

  

}
