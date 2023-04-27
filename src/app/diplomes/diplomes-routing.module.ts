import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiplomeFormComponent } from './diplome-form/diplome-form.component';
import { DiplomeaffectComponent } from './diplomeaffect/diplomeaffect.component';

import { ListDiplomeComponent } from './list-diplome/list-diplome.component';

const routes: Routes = [
  {
    path:"",component:ListDiplomeComponent , children:[{path:"affect/:idDiplomes",component:DiplomeaffectComponent}]
},{path:"formulairediplome", component:DiplomeFormComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiplomesRoutingModule { }
