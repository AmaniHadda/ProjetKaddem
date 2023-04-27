import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Diplome } from '../modules/diplome';
import { SharedService } from '../services/shared-dep/shared.service';

@Component({
  selector: 'app-diplomeaffect',
  templateUrl: './diplomeaffect.component.html',
  styleUrls: ['./diplomeaffect.component.css']
})
export class DiplomeaffectComponent implements OnInit {
id : number = 0
diplome :  Diplome = new Diplome();
liste : Diplome[]=[];
universite :number;
  constructor(private myservice:SharedService , private ac: ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.params.subscribe(params => {
      this.id=params['idDiplomes']; console.log(this.id); this.getbyid(this.id)
       });
  }
  getbyid(id:number){
    this.myservice.getDiplomeById(id).subscribe(diplome=>{this.diplome.idDiplomes = diplome.idDiplomes;});
  }

  Affecterdiptounivv (idDiplomes , universite){
    this.myservice.assignDiplomeToUniv(this.diplome.idDiplomes ,this.universite ).subscribe(
      (resp )=>{
        console.log(resp);
        alert(" Affecté avec succès")
        this.myservice.getAlldiplomeFromDB().subscribe(data=>
          {this.liste=data, console.log(this.liste)}
          );
      },
      (errors)=>{
        console.log(errors);
      }
    );
  }
}
