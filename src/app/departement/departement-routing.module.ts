import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement/departement.component';
import { FormDepartementComponent } from './form-departement/form-departement.component';

const routes: Routes = [{path:"", component:DepartementComponent, children:[{path:"update/:idDepart", component:FormDepartementComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
