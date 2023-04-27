import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { universite } from './modeles/university';

@Injectable({
  providedIn: 'root'
})
export class ServicessService {
  urluniv : string ="http://localhost:8070/Univeristee";
  constructor(private _http:HttpClient) { }

  getAllUnivFromDB():Observable<universite[]>{
    return this._http.get<universite[]>(this.urluniv);
  }
  deleteuniv(id:number){
    return this._http.delete(this.urluniv+'/supprimeruniv/'+id);
  }

public adduniv(u: universite){
  return this._http.post(this.urluniv+ '/ajouterUniv', u);
}
}
