import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject, tap } from 'rxjs';
import { departement, TypeDep } from '../models/departement';
import { salle } from '../models/salle';

@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {
  urlDept : string = "http://localhost:8070/departement";
  urlSalle : string = "http://localhost:8070/salle";
  private refreshdepartements= new Subject<void>();
  private refreshSalle= new Subject<void>();
  constructor(private _http:HttpClient, private fb: FormBuilder) { }
  get refreshdept(){
    return this.refreshdepartements;
  }
  get refreshsalle(){
    return this.refreshSalle;
  }
  getAllDeptFromDB():Observable<departement[]>{
    return this._http.get<departement[]>(this.urlDept);
  }
  getDepartementById(id:number):Observable<departement>{
    return this._http.get<departement>(this.urlDept+'/'+id);
  }
  deleteDept(id:number){
      return this._http.delete(this.urlDept+"/"+id)
  }
  addDepartement(d:departement):Observable<departement>{
    return this._http.post<departement>(this.urlDept,d).pipe(tap(()=>{
      this.refreshdepartements.next();
    }));
  }
  updateDepartement(dept:departement){
    return this._http.put(this.urlDept+"/modifier",dept).pipe(tap(()=>{
      this.refreshdepartements.next();
    }));
  }
  getNbSallesByDept(dep:departement){
    return this._http.get(this.urlDept+"/nbSalleByDept/"+dep.idDepart);
  }
  getNbEtudiantsByDept(dep:departement){
    return this._http.get(this.urlDept+'/nbEtudByDept/'+dep.idDepart);
  }
  isExist(nom:String){
    return this._http.get(this.urlDept+"/getbynom/"+nom);
  }
  getNbDeptbyType(typeDep: string){
    return this._http.get(this.urlDept+"/countDepByType/"+typeDep);
  }
  affectSallesToDepartement(d:number, s:salle[]){
    return this._http.post(this.urlSalle+"/affect/"+d,s);
  }
  getSallesByDepartement(d:number):Observable<salle>{
    return this._http.get<salle>(this.urlSalle+"/sallesbydept/"+d).pipe(tap(()=>{
      this.refreshSalle.next();
    }));
  }
  désaffectSalle(d:number){
    return this._http.delete(this.urlSalle+"/delete/"+d);
  }
  FindByCapaciteBetween(a: number, b:number, id: number):Observable<salle[]>{
    return this._http.get<salle[]>(this.urlSalle+"/findByCapacite/"+id+"/"+a+"/"+b);
  }
}
