import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/module/shared/shared.module';
import { StudentComponent } from '../dashboard/components/student/student.component';

import { OptionComponent } from '../dashboard/components/option/option.component';
import { ServiceStudentService } from '../dashboard/service/service-student.service';
import { TableStudentComponent } from '../dashboard/components/table-student/table-student.component';

@NgModule({
  declarations: [
    StudentComponent,
    TableStudentComponent,
    OptionComponent
  ],
  imports: [    
    EtudiantRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [ServiceStudentService],
})
export class EtudiantModule { }
