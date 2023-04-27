import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { departement } from '../shared/models/departement';
import { DepartementServiceService } from '../shared/services/departement-service.service';

@Component({
  selector: 'app-form-departement',
  templateUrl: './form-departement.component.html',
  styleUrls: ['./form-departement.component.css']
})
export class FormDepartementComponent implements OnInit {
  d : departement = new departement();
  exist : any;
  id:number=0;
  msg: string="";
  @Output() change: EventEmitter<any>=new EventEmitter()
  constructor(private myService:DepartementServiceService,private _router:Router, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.params.subscribe(params=>{this.id=params['idDepart'], this.findObject(this.id);});
  }
  onSubmit(form:any){
    if(this.id=0){
        this.myService.addDepartement(this.d).subscribe();   
        
      }else{ 
        this.myService.updateDepartement(this.d).subscribe();
      }
  location.reload;
  form.reset();
  }
  findObject(id:number){
    console.log("findobjectavant:"+id)   
    if(id){  
      console.log("findobject:"+id)   
    this.myService.getDepartementById(id).subscribe(d=>{this.d.nomDepart=d.nomDepart;
    this.d.typeDep=d.typeDep;this.d.idDepart=id});      
    }  
  }
  cancel(form:any){
  location.reload;
   form.reset(); 
   this.change.emit(true);
  }
}
