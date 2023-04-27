import { NgModule } from '@angular/core';
import { DiplomesRoutingModule } from './diplomes-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListDiplomeComponent } from './list-diplome/list-diplome.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DiplomeFormComponent } from './diplome-form/diplome-form.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DiplomeaffectComponent } from './diplomeaffect/diplomeaffect.component';

import { DetailsComponent } from './list-diplome/details/details.component';
@NgModule({
  declarations: [
    ListDiplomeComponent,
    DiplomeFormComponent,
    DiplomeaffectComponent,
    DetailsComponent
   
  
  ],
  imports: [
    DiplomesRoutingModule,
    FormsModule,
    CommonModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
   

  ]
})
export class DiplomesModule { }
