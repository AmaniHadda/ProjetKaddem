import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit {
title='pagination';
page:number = 1;
count:number = 0;
tableSize:number=2;
tablesSizes:any=[1,2,3,4];
  professeurs!:any;
  nomP!:any;
  etudiant!:any;
  constructor(private service:CrudService,private router:Router,private ac:ActivatedRoute) { }

  ngOnInit(): void {
  this.nomP=this.ac.snapshot.params['nomP'];
  console.log(this.nomP);
  this.getEtudiant()
  }
   
  
   getEtudiant(){
    this.service.EtudiantAffecteToProf(this.nomP).subscribe(data => {this.etudiant=data})
   }
   onTableDataChange(event:any){
    this.page=event;
    //this.getEtudiant()
  }
  onTableSizeChange(event:any):void{
    this.tableSize=event.target.value;
    this.page=1;
    this.getEtudiant();
  }

  }

  




