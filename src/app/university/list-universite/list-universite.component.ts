import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { universite } from '../modeles/university';
import { ServicessService } from '../servicess.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {
  myForm: FormGroup;
  listt :  universite[] = [];
  univ: universite = new universite();
  constructor( private myserv:ServicessService) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      details : new FormGroup({
        nomUniv:new FormControl('',[Validators.required,Validators.minLength(3)])
    })
  }),

  this.myserv.getAllUnivFromDB().subscribe(data=>{this.listt=data, console.log(this.listt)});
console.log(this.listt)

  }
  get Detail() {
    return this.myForm.controls['details'];
  }
 
  get NomUniversite() {
    return this.myForm.controls['details'].get('nomUniv');
  }
  
  deleteuniv(uni: universite){
    this.myserv.deleteuniv(uni.idUniv).subscribe(
      (resp:any)=>{
        console.log(resp , uni.idUniv)
        alert("delete succecful")
        this.myserv.getAllUnivFromDB().subscribe(data=>{this.listt=data, console.log(this.listt)});


      },
      errors=>{
        console.log(errors);
      }

    );
  
}
onsubmit(){
  this.myserv.adduniv(this.univ).subscribe((resp:any)=>{
     console.log(resp)
     alert("add succecful")
     this.myserv.getAllUnivFromDB().subscribe(data=>
      {this.listt=data, console.log(this.listt)}
      );
   },
   errors=>{
     console.log(errors);
   });
   

}
}