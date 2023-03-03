import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {StudentResultComponent} from "./components/student-result/student-result.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'person/profile', component: ProfileComponent },
  { path: 'student/result', component: StudentResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
