import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: "admin", component: NavBarComponent, children: [
      { path: "aa", loadChildren: () => import("../app/etudiant/etudiant.module").then(m => m.EtudiantModule) },
      { path: "equipes", loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule), canActivate: [AuthenticationGuard] },
      { path: "departement", loadChildren: () => import('./departement/departement.module').then(m => m.DepartementModule), canActivate: [AuthenticationGuard] },
      { path: "diplome", loadChildren: () => import('./diplomes/diplomes.module').then(d => d.DiplomesModule), canActivate: [AuthenticationGuard] },
      { path: "university", loadChildren: () => import('./university/university.module').then(u => u.UniversityModule), canActivate: [AuthenticationGuard] },
      { path:"bacary", loadChildren: ()=>import('./professeur/crud/crud.module').then(p=>p.CrudModule), canActivate: [AuthenticationGuard]},
      { path: "home", component: HomeComponent, canActivate: [AuthenticationGuard] }, { path: "", component: HomeComponent, canActivate: [AuthenticationGuard] },
      { path: "login", component: LoginComponent }]
  }
  , { path: "login", component: LoginComponent }
  , { path: "", component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
