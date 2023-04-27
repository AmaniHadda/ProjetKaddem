import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Professeur } from '../prof/modele/professeur';

@Component({
  selector: 'app-modif-prof',
  templateUrl: './modif-prof.component.html',
  styleUrls: ['./modif-prof.component.css']
})
export class ModifProfComponent implements OnInit {
  Prof:Professeur=new Professeur()
  idProf!:number;
  myform!:FormGroup;

  constructor(private ac:ActivatedRoute,private service:CrudService,private router:Router) { }

  ngOnInit(): void {
    this.myform = new FormGroup({
      nomP:new FormControl('',[Validators.required]),
      prenomP:new FormControl('',[Validators.required]),
      matiere:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      password:new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{8,}?")]),
    })
    this.idProf=this.ac.snapshot.params['idProf']
    this.service.getProfesseurById(this.idProf).subscribe(data=>{
      this.Prof=data;
    })

  }
  onSubmite(){
    this.service.updatedProf(this.idProf,this.Prof).subscribe(data=>{
      this.goToProfList();
    })
}
goToProfList(){
  this.router.navigate(['/admin/bacary']);
}
get password(){
   return this.myform.controls['password'];
  }
  get nomP(){
    return this.myform.controls['nomP'];
   }
   get prenomP(){
    return this.myform.controls['prenomP'];
   }
   get matiere(){
    return this.myform.controls['matiere'];
   }
   get email(){
    return this.myform.controls['email'];
   }
}