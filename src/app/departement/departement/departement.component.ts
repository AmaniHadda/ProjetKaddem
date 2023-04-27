import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { observable, Observable } from 'rxjs';
import { departement, TypeDep } from '../shared/models/departement';
import { DepartementServiceService } from '../shared/services/departement-service.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  list: any[]=[];
  amani:boolean=true;
  searchText: any;
  message: object=[];
  etud: object=[];
  hide:boolean=false;
  p: number = 1;
  isAddMode: boolean=true;
  type1: object=[];
  type2: object=[];
  type3: object=[];
  type4: object=[];
  type5: object=[];
 public titre: string= "Ajouter"
  constructor(private myService:DepartementServiceService, private router:Router,private modalService: NgbModal) { 
  }
  ngOnInit(): void {
    this.myService.getAllDeptFromDB().subscribe(data=>{this.list=data, console.log(this.list)});
    this.myService.refreshdept.subscribe(response=>{
      this.myService.getAllDeptFromDB().subscribe(data=>{this.list=data, console.log(this.list)});
    });
    this.NbByType();
  }
  deleteDepartement(d:departement){
    this.myService.deleteDept(d.idDepart).subscribe(()=>this.myService.getAllDeptFromDB().subscribe(res=>this.list=res));
  }
	formulaire(){
    this.myService.refreshdept;
  }
  NbByType(){
      this.myService.getNbDeptbyType("Informatique").subscribe(data=>this.type1=data)
      this.myService.getNbDeptbyType("Chimie").subscribe(data=>this.type2=data)
      this.myService.getNbDeptbyType("Biologie").subscribe(data=>this.type3=data)
      this.myService.getNbDeptbyType("Mathematique").subscribe(data=>this.type4=data)
      this.myService.getNbDeptbyType("Economie").subscribe(data=>this.type5=data)
  }
  open(content:any, d:departement) {
	 this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
   this.myService.getNbSallesByDept(d).subscribe(data=>this.message=data);
   this.myService.getNbEtudiantsByDept(d).subscribe(data=>this.etud=data)
	}
  opened() {
    this.isAddMode=false; 
     this.titre="Modifier";
	}
  opensalles(salles:any){
    this.modalService.open(salles, { ariaLabelledBy: 'modal-basic-titlee' });
  }
}
