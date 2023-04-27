import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { departement } from '../shared/models/departement';
import { salle } from '../shared/models/salle';
import { DepartementServiceService } from '../shared/services/departement-service.service';

@Component({
  selector: 'app-salles-affect',
  templateUrl: './salles-affect.component.html',
  styleUrls: ['./salles-affect.component.css']
})
export class SallesAffectComponent implements OnInit {
  constructor(private fb: FormBuilder,private departementService: DepartementServiceService, private ac: ActivatedRoute) { }
  Salle= new salle();
  @Input() id: number;
  d : departement = new departement();
  salles: salle[];
  
  myForm=new FormGroup({
    SalleArray: this.fb.array([])
  });
  ngOnInit(): void {
    this.Addnewrow() 
  }
  get SalleArray(){
    return this.myForm.controls["SalleArray"] as FormArray;
  }
  Addnewrow(){
    const items=this.fb.group({
      numSalle:['',Validators.required],
      capacite: ['',Validators.required]
    });
    console.log(items);
    this.SalleArray.push(items)
  }
  add(){
    this.salles=this.SalleArray.value;
    console.log(this.id);
    this.departementService.affectSallesToDepartement(this.id, this.salles).subscribe();
  }
}
