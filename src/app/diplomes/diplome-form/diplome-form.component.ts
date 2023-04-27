import { Component, OnInit } from '@angular/core';
import { Diplome } from '../modules/diplome';
import { SharedService } from '../services/shared-dep/shared.service';

@Component({
  selector: 'app-diplome-form',
  templateUrl: './diplome-form.component.html',
  styleUrls: ['./diplome-form.component.css'],
   
})
export class DiplomeFormComponent implements OnInit {
  liste : Diplome[]=[];
  diplome : Diplome = new Diplome();
  public month: number = new Date().getMonth();
public fullYear: number = new Date().getFullYear();
public minDate: Date = new Date(this.fullYear, this.month , 7);
public maxDate: Date = new Date(this.fullYear, this.month, 27);
  constructor(private myservice:SharedService) { }

  ngOnInit(): void {
  }

  onsubmit(){
 
    this.myservice.addDiplome(this.diplome).subscribe((resp:any)=>{
       console.log(resp)
       alert("add succecful")
       this.myservice.getAlldiplomeFromDB().subscribe(data=>
        {this.liste=data, console.log(this.liste)}
        );
     },
     errors=>{
       console.log(errors);
     });
     
 
 }
}
