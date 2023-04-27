import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Diplome } from '../modules/diplome';
import { Option } from '../modules/Option';
import { SharedService } from '../services/shared-dep/shared.service';

@Component({
  selector: 'app-list-diplome',
  templateUrl: './list-diplome.component.html',
  styleUrls: ['./list-diplome.component.css'],
  
})
export class ListDiplomeComponent implements OnInit {

  public title = 'Le Nombre des diplomes affectées à une université est : ';
  public nbr='';
  Optio : any []=[]
 
  liste : Diplome[]=[];
  diplome : Diplome = new Diplome();
  p: number = 1;
  msg: any;
  mapObject :any ; 
id : number=0;
 Update={
  idDiplomes:"",
    nameDiplome :"",
    opt :"",
    dateDiplome :""
 }
 diplomeByOption={
  opt :""
 }
 
  idDiplomes : number;
  idUniv :number;
 
 date1:Date;
 date2:Date;
 Affecterdipuniv={
  idDiplomes :""
 }
  constructor(private myservice:SharedService , private ac: ActivatedRoute) { }
  searchText: any;
  ngOnInit(): void {
    this.myservice.getAlldiplomeFromDB().subscribe(data=>
      {this.liste=data, console.log(this.liste)}
      );
      this.Optio=[
      { opt: "GAMIX" },
      { opt: "SE" },
      { opt: "NIDS" },
      { opt: "TWIN" },
      { opt: "SLEAM" },
      { opt: "SIM" }
    

      ]
     
  }

   deleteDiplome(d: Diplome){
    this.myservice.deleteDiplome(d.idDiplomes).subscribe(
      (resp:any)=>{
        console.log(resp)
        alert("delete succecful")
        this.myservice.getAlldiplomeFromDB().subscribe(data=>
          {this.liste=data, console.log(this.liste)}
          );
      },
      errors=>{
        console.log(errors);
      }

    );
  
    
  }
  onPress() {
    console.log("clicked");
    document.querySelector('#comp-render').innerHTML='<object type="text/html" data="diplome-form.component.html" ></object>';
}

onsubmit(){
 
   this.myservice.addDiplome(this.diplome).subscribe((resp:any)=>{
      console.log(resp)
      alert("add succecful")
    },
    errors=>{
      console.log(errors);
    });
    

}
/*getdiplomeDetail($event:any, id: number){
  this.myservice.getDiplomeById(id).subscribe(
    (resp:any)=>{
      this.myservice=resp ;
      console.log(this.myservice);
      console.log("details");
      console.log(resp);
      console.log($event.target.id)

    },
    (erros)=>{
     
      console.log("erros");

    }
  );
}*/
edit(Diplome){
  this.Update=Diplome;
  console.log(Diplome);
  console.log( this.Update);
}
updateDiplome (){
  this.myservice.updateDiplome(this.Update).subscribe(
    (resp )=>{
      console.log(resp);
      alert("modifie succecful")
    },
    (errors)=>{
      console.log(errors);
    }
  );
}
getdiplomebyoption (opt){
  this.myservice.getdiplomebyoption (opt ).subscribe(
    data=>
    {this.liste=data, console.log(this.liste)}
    );

}
getdiplomePrisEntreDeuxDatesParOptions (d1,d2){
  this.myservice.getdiplomePrisEntreDeuxDatesParOptions (d1,d2 ).subscribe((data)=>{this.mapObject=data},
    (resp )=>{
      console.log(resp);
    }
  );
  console.log(d1, d2);
 // for(let [key,value]of this.mapObject){
 //   this.msg=key +" "+value
 // }

}
affectation(idDiplomes){

  this.Affecterdipuniv=idDiplomes;
  console.log(idDiplomes);
  console.log( this.Affecterdipuniv);
}

Affecterdiptounivv (){
  this.myservice.assignDiplomeToUniv(this.idDiplomes ,this.idUniv ).subscribe(
    (resp )=>{
      console.log(resp);
    },
    (errors)=>{
      console.log(errors);
    }
  );
}
/*getbyid(id:number){
  this.myservice.getDiplomeById(id).subscribe(diplome=>{this.diplome.idDiplomes = id;});
}*/
}
