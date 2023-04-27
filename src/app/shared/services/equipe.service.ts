import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Subject } from 'rxjs';
import { DetailEquipe } from '../model/DetailEquipe';
import { Equipe } from '../model/Equipe';

@Injectable()
export class EquipeService {
  idEquipe:number;
  urlEquipes : string = "/api/Equipe";
  urlDetailEquipe :string ="/api/DetailEquipe"
  constructor(private _http:HttpClient ,private ac:ActivatedRoute) { }
  private _Refresh=new Subject<void>();
  get _refresh()
  {
    return this._Refresh;
  }

  getAllEquipes():Observable<Equipe[]>{
    return this._http.get<Equipe[]>(this.urlEquipes+"/"+"afficherEquipe");
  }
  getEquipe(id:number):Observable<Equipe>{
    return this._http.get<Equipe>(this.urlEquipes+"/"+"afficherEquipe"+"/"+id)
  }
  addEquipe(equipe:Equipe):Observable<Equipe>{
    return this._http.post<Equipe>(this.urlEquipes+"/"+"ajouterEquipe",equipe).pipe(
      tap(()=>{this._refresh.next()
      })
    );
  }
  UpdateEquipe(equipe:Equipe){
    return this._http.put(this.urlEquipes+"/"+"modifierEquipe",equipe).pipe(
      tap(()=>{this._refresh.next()}));
  }
  deleteEquipe(equipe:Equipe):Observable<Equipe>{
    return this._http.delete<Equipe>(this.urlEquipes+"/"+"supprimerEquipe"+"/"+equipe.idEquipe)
  }
  addDetailEquipe(detailEquipe:DetailEquipe):Observable<DetailEquipe>{
    return this._http.post<DetailEquipe>(this.urlDetailEquipe+"/"+"ajouterDetailEquipe",detailEquipe)
  }
  affecter(idEquipe:number ,detailEquipe:DetailEquipe){
    return this._http.put(this.urlEquipes+"/"+"affecterDetailsEquipeToEquipe"+"/"+idEquipe,detailEquipe)
  }
  getNombre(nomEquipe:String):Observable<number>{
    return this._http.get<number>(this.urlEquipes+"/"+"GetNbEtudiants"+"/"+nomEquipe)
  }
  getNbEquipe():Observable<number>{
    return this._http.get<number>(this.urlEquipes+"/"+"NbEquipe")
  }
  getNbEquipeByNiveau(n:String):Observable<number>{
    return this._http.get<number>(this.urlEquipes+"/"+"NbEquipeByNiveau"+"/"+n)
  }
  getEquipeByEtudiant(nomEtudiant:string):Observable<Equipe>{
    return this._http.get<Equipe>(this.urlEquipes+"/"+"getEquipeByEtudiant"+"/"+nomEtudiant)
  }

  
  
  
}
