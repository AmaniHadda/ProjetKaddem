import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListUniversiteComponent
  ],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UniversityModule { }
