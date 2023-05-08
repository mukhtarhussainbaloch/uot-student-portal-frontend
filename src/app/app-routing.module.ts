import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentResultComponent } from './components/student-result/student-result.component';
import { StudentFeeComponent } from './components/student-fee/student-fee.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { AdvanceSearchComponent } from './components/advance-search/advance-search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student/profile', component: ProfileComponent },
  { path: 'student/result', component: StudentResultComponent },
  { path: 'student/finance', component: StudentFeeComponent },
  { path: 'student/list', component: PersonListComponent },
  { path: 'student/search', component: AdvanceSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
