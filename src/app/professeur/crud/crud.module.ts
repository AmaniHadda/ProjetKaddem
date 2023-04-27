import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProfComponent } from '../list-prof/list-prof.component';
import { ModifProfComponent } from '../modif-prof/modif-prof.component';
import { ProfComponent } from '../prof/prof.component';
import { ProfDetailComponent } from '../prof-detail/prof-detail.component';
import { ListeEtudiantComponent } from '../liste-etudiant/liste-etudiant.component';
import { ProfDepartComponent } from '../prof-depart/prof-depart.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
   ListProfComponent,
   ModifProfComponent,
   ProfComponent,
   ProfDetailComponent,
   ListeEtudiantComponent,
   ProfDepartComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports:[
    ListProfComponent,
    ModifProfComponent,
    ProfComponent,
    ProfDetailComponent,
    ProfDepartComponent
  ],

})
export class CrudModule { }
