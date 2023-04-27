import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe/equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { EquipeFormComponent } from './equipe-form/equipe-form.component';
import { EquipesComponent } from './equipes/equipes.component';
import { EquipeService } from '../shared/services/equipe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsEquipeComponent } from './details-equipe/details-equipe.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    EquipeComponent,
    ListEquipeComponent,
    EquipeFormComponent,
    EquipesComponent,
    DetailsEquipeComponent,
    
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
    
  ],
  providers: [EquipeService],
})
export class EquipeModule { }
