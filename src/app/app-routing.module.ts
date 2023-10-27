import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

const routes: Routes = [
  {path:'',redirectTo:'Student', pathMatch: "full"},
  {path:'Student',component:StudentComponent},
  {path:'Student/details/:id',component:StudentComponent},
  {path:'Student/edit/:id',component:StudentFormComponent},
  {path:'Student/new',component:StudentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
