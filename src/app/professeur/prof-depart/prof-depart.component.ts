import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
import { Professeur } from '../prof/modele/professeur';

@Component({
  selector: 'app-prof-depart',
  templateUrl: './prof-depart.component.html',
  styleUrls: ['./prof-depart.component.css']
})
export class ProfDepartComponent implements OnInit {
nomDepart!:any;
Professeur!:any;
title='pagination';
page:number = 1;
count:number = 0;
tableSize:number=2;
tablesSizes:any=[1,2,3,4];
  constructor(private ac:ActivatedRoute,private service:CrudService) { }

  ngOnInit(): void {
  this.nomDepart = this.ac.snapshot.params['nomDepart'];
    console.log(this.nomDepart);
   this.getProf()
  }
  getProf(){
    this.service.ProfesseurByNameDepart(this.nomDepart).subscribe(data=>this.Professeur=data);
  }

  onTableDataChange(event:any){
    this.page=event;
  //  this.getProf()
  }
  onTableSizeChange(event:any):void{  
    this.tableSize=event.target.value;
    this.page=1;
    this.getProf();
  }

}
