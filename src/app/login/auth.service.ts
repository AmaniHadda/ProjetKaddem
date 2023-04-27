import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Observable, of, throwError } from 'rxjs';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
users: user[]= []
authenticatedUser: user|undefined;
  constructor( ) {
    this.users.push({userId: UUID.UUID(), username: "user1", password:"1234", roles:["USER"]});
    this.users.push({userId: UUID.UUID(), username: "user2", password:"1234", roles:["USER"]});
    this.users.push({userId: UUID.UUID(), username: "admin", password:"1234", roles:["USER", "ADMIN"]})
   }
   public login( username: string,  password: string): Observable<user>{
      let appUser= this.users.find(u=>u.username==username)
      if(!appUser){
          return throwError(()=>new Error("User not found"));
      }
      if(appUser.password!= password){
        return throwError(()=>new Error("bad credentials"));
      }
      return of(appUser);
   }
   public authenticateUser(appUser: user):Observable<boolean>{
    this.authenticatedUser= appUser; 
    localStorage.setItem("authUser",JSON.stringify({username: appUser.username, roles: appUser.roles, jwt:"JWT_TOKEN"}))
    return of(true);
   }

   public hasRole(role : string):boolean{
     return this.authenticatedUser!.roles.includes("ADMIN");
   }
   public isAuthendificated(){
    return this.authenticatedUser!=undefined;
   }
   public logout(): Observable<boolean>{
    this.authenticatedUser=undefined;
    localStorage.removeItem("authUser");
    return of(true);   }
}
