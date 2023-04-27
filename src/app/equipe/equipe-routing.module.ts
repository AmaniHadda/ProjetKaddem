import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeFormComponent } from './equipe-form/equipe-form.component';
import { EquipesComponent } from './equipes/equipes.component';

const routes: Routes = [
  {path:"",component:EquipesComponent,children:[
    {path:"form/:idEquipe", component:EquipeFormComponent},
    {path:"Form", component:EquipeFormComponent},
  ]},
  
  //{path:"form/:idEquipe", component:EquipeFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
