import { ThisReceiver } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DetailEquipe } from 'src/app/shared/model/DetailEquipe';
import { Equipe } from 'src/app/shared/model/Equipe';
import { EquipeService } from 'src/app/shared/services/equipe.service';


@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
  Nb: any;
  error:boolean=true;
  message :String="Nom d'equipe introuvable !";
  message1 :String="Nom d'etudiant introuvable !";
  nomEquip:string;
  p: number = 1;
  listEq:Equipe[]=[];
  idEquipe:Number;
  idEq:number;
  equipe :Equipe=new Equipe();
  show:boolean=true;
  searchText:string;
  EquipeByEtudiant:Equipe=new Equipe();
  nomEtudiant:string;
  error1:boolean=true;
  a:number;
  myForm:FormGroup;

  constructor(private sEquipe:EquipeService,private ac:ActivatedRoute) {
   }
  ngOnInit(): void {
    this.sEquipe.getAllEquipes().subscribe(data=>this.listEq=data);
    this.sEquipe._refresh.subscribe(Response=>{this.sEquipe.getAllEquipes().subscribe(data=>this.listEq=data);})
    this.myForm=new FormGroup({
      nomEtudiant : new FormControl('',Validators.required)
    })
    
  }

    
  delete(equipe:Equipe){
    if(confirm('Are you sure to delete equipe ?')){
    this.sEquipe.deleteEquipe(equipe).subscribe(()=>this.sEquipe.getAllEquipes().subscribe(data=>this.listEq=data))
    }
  }
  ShowDetails(E,i){
    this.equipe=E;
    this.show=false;
    this.a=i;
  }
  GetNbEtudiants(nomEquipe:string){
    for(let eq of this.listEq){
      if(eq.nomEquipe==nomEquipe){
        this.sEquipe.getNombre(nomEquipe).subscribe(data=>{this.Nb=data,this.error=true});
      }
      else{
        this.error=false;
        this.Nb=undefined;
      }
      
  }
}
GetEquipeByEtudiant(nomEtudiant:string){
  this.nomEtudiant=this.myForm.get('nomEtudiant').value;
  this.sEquipe.getEquipeByEtudiant(nomEtudiant).subscribe((resp)=>{this.EquipeByEtudiant=resp},errors=>{console.log(errors)});
}
close(){
  this.show=true;
}
style(i:number){
if(i==this.a){

}
}
  

  
}


