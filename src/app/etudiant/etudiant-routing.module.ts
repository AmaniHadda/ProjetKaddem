import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../dashboard/components/student/student.component';
import { TableStudentComponent } from '../dashboard/components/table-student/table-student.component';

const routes: Routes = [{path:"details",component:TableStudentComponent},{path :"student" ,component:StudentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
