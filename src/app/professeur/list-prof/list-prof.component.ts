import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.css']
})
export class ListProfComponent implements OnInit {
professeurs!:any[];
title='pagination';
page:number = 1;
count:number = 0;
tableSize:number=5;
tablesSizes:any=[1,2,3,4];
//@Output()passed!:new EventEmitter();
@Input() idProf!:any;
nomDepart:any;
@Input() nomP!:any;
@Input() prenomP!:any;
@Input() matiere!:any;
@Input() nbreEqu!:any;
@Input() email!:any;
@Input() password!:any;
@Output() change: EventEmitter<any>=new EventEmitter()

 constructor(private service:CrudService,
  private ac:ActivatedRoute,
  private router:Router
  ) { }

  ngOnInit(): void {
      this.getProf()
    } 
    getProf(){
      this.service.getAllprofs().subscribe((data:any)=>{
        this.professeurs=data;
        console.log(this.professeurs);
      })
    }
    deleteProf(p:any){
      this.service.deleteProf(p.idProf).subscribe((data:any)=>{
        this.getProf();
      })
      }

      updateProf(idProf:number){
        this.router.navigate(['admin/bacary/prof',idProf])
      }
      profDetail(idProf:number){
        this.router.navigate(['admin/bacary/detailsprof',idProf])
      }

      recuperer(idProf:number){
        this.router.navigate(['admin/bacary/listEtudiant',idProf])

      }
      recupererDepartement(nomDepart:any){
        this.router.navigate(['admin/bacary/ProfDepart',nomDepart])
      }
      onTableDataChange(event:any){
        this.page=event;
        // this.getProf();
      }
      onTableSizeChange(event:any):void{
        this.tableSize=event.target.value;
        this.page=1;
        this.getProf();

      }
  
     
    }
   



