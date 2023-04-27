import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../components/student/student.component';
import { TableStudentComponent } from '../components/table-student/table-student.component';

const routes: Routes = [
  {path :"" ,component:StudentComponent },

  {path:"detailsStud" , component: TableStudentComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
