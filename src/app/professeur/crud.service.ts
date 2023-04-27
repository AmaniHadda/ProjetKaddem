import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professeur } from './prof/modele/professeur';
@Injectable({
  providedIn: 'root'
})

export class CrudService {

  baseUrl ="http://localhost:8070/deleteProfesseur";
  baseUrl2="http://localhost:8070/addProfesseur";
  baseUrl3="http://localhost:8070";
  baseUrl4="http://localhost:8070/RetrieveProfesseur";
  baseUrl5="http://localhost:8070/updateProfesseur";


  constructor(private http:HttpClient){}


  getAllprofs(){
    return this.http.get(this.baseUrl3 + '/RetrieveAllProfesseur');
  }

  saveProf(prof:Professeur):Observable<Object>{
    return this.http.post(`${this.baseUrl2}`,prof);
  }

  updateProf(prof:any){
    return this.http.put(this.baseUrl3 + '/updateProfesseur',prof);
  }
  deleteProf(idProf:any){
    return this.http.delete(`${this.baseUrl}/${idProf}`);
  }

  getProfesseurById(idProf:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl4}/${idProf}`)
  }

  updatedProf(idProf:number,prof:Professeur){
    return this.http.put(`${this.baseUrl5}/${idProf}`,prof);

  }
  EtudiantAffecteToProf(nomP:any):Observable<Object>{
    return this.http.get(`${this.baseUrl3}/EtudiantByProfName/${nomP}`)
  }

  ProfesseurByNameDepart(nomDepart:any):Observable<Object>{
    return this.http.get(`${this.baseUrl3}/ProfesseurByNameDepart/${nomDepart}`)
  }
checkPassword(){
  return this.http.get(`${this.baseUrl3}/CheckPassword`)
}



}




