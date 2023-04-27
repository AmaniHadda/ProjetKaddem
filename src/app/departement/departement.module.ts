import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementComponent } from './departement/departement.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormDepartementComponent } from './form-departement/form-departement.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SallesAffectComponent } from './salles-affect/salles-affect.component';
import { SallesComponent } from './salles/salles.component';


@NgModule({
  declarations: [
    DepartementComponent,
    FormDepartementComponent,
    SallesAffectComponent,
    SallesComponent   
  ],
  imports: [
    CommonModule,FormsModule,
    DepartementRoutingModule, Ng2SearchPipeModule, NgbModule, NgxPaginationModule,ReactiveFormsModule, NgbCollapseModule
  ],
  
})
export class DepartementModule { }
