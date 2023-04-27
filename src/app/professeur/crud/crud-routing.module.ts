import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/guards/authentication.guard';
import { ListProfComponent } from '../list-prof/list-prof.component';
import { ListeEtudiantComponent } from '../liste-etudiant/liste-etudiant.component';
import { ModifProfComponent } from '../modif-prof/modif-prof.component';
import { ProfDepartComponent } from '../prof-depart/prof-depart.component';
import { ProfDetailComponent } from '../prof-detail/prof-detail.component';
import { ProfComponent } from '../prof/prof.component';

const routes: Routes = [
  {path:"", component:ListProfComponent},
  {path:"prof", component:ProfComponent},
  
  {path:"prof/:idProf",component:ModifProfComponent},
  {path:"detailsprof/:idProf",component:ProfDetailComponent},
  {path:"listEtudiant/:nomP",component:ListeEtudiantComponent},
  {path:"ProfDepart/:nomDepart",component:ProfDepartComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
