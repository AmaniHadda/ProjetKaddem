import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { salle } from '../shared/models/salle';
import { DepartementServiceService } from '../shared/services/departement-service.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {
  @Input() iddept: number;
  list: any;
  liste:salle[];
  myForm :  FormGroup;
  public isCollapsed = true;
  public hide =false;
  constructor(private myService:DepartementServiceService) { }
  ngOnInit(): void {
    this.myService.getSallesByDepartement(this.iddept).subscribe(data=>{this.list=data, console.log(this.list)});
    console.log(this.list);
    this.myForm=new FormGroup({
        a:new FormControl('', [Validators.required]),
        b:new FormControl('', [Validators.required])
      }) 
  }
  desaffecter(idSalle:number){
    this.myService.désaffectSalle(idSalle).subscribe(()=>this.myService.getSallesByDepartement(this.iddept).subscribe(res=>this.list=res));
  }
  Find(){
    this.myService.FindByCapaciteBetween(this.a.value,this.b.value,this.iddept).subscribe(find=>this.list=find)
    console.log(this.a.value, this.b.value)
    console.log(this.list);
  }
  get a(){
    return this.myForm.controls['a'];
  }
  get b(){
    return this.myForm.controls['b'];
  }


}
