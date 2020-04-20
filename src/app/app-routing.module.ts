import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { StudentComponent } from './student/student.component';
import {AddStudentComponent} from './student/add-student/add-studentcomponent';
import {SearchStudentComponent} from './student/search-student/search-student.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path:'students', component: StudentComponent},
  {path:'add-student',component: AddStudentComponent},
  {path:'edit-student/:id', component: EditStudentComponent},
  {path:'search-student', component:SearchStudentComponent},
  {path:'', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
