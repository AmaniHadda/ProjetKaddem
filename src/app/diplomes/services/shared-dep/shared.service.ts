import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diplome } from '../../modules/diplome';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
urldip : string ="http://localhost:8070/Diplome";



  constructor(private _http:HttpClient) { }


  getAlldiplomeFromDB():Observable<Diplome[]>{
    return this._http.get<Diplome[]>(this.urldip);
  }

  deleteDiplome(id:number){
    return this._http.delete(this.urldip+'/supprimerdip/'+id);
  }

public addDiplome(d: Diplome){
  return this._http.post(this.urldip+ '/ajouterdip', d);
}

public updateDiplome (diplomeData){
  return this._http.put(this.urldip +'/modifierdip',diplomeData)
}
public getDiplomeById(id: number):Observable<Diplome>{
  return this._http.get<Diplome>(this.urldip+ '/afficherdip/'+id);
}
public getdiplomebyoption(option):Observable<Diplome[]>{
  return this._http.get<Diplome[]>(this.urldip+'/afficherList/'+option)
}
public getdiplomePrisEntreDeuxDatesParOptions(date1:Date,date2:Date){
  return this._http.get(this.urldip+'/mappedDip/'+date1+'/'+date2)
}
public assignDiplomeToUniv(idDiplomes:number ,iduniv:number){

return this._http.post(this.urldip+'/assignDiplomeToUniv/'+idDiplomes+'/'+iduniv ,null)
}

public NombreDiplome(){
  return this._http.get(this.urldip+'/nmbrDipByUniv')
}
}
