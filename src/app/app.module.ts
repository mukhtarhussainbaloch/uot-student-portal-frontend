import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ProfilePicComponent } from './components/profile-pic/profile-pic.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AddressComponent } from './components/address/address.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SemesterResultComponent } from './components/semester-result/semester-result.component';
import { CourseResultComponent } from './components/course-result/course-result.component';
import { StudentResultComponent } from './components/student-result/student-result.component';

import { MatDividerModule } from '@angular/material/divider';
import { StudentFeeComponent } from './components/student-fee/student-fee.component';
import { StudentSemesterFeeComponent } from './components/semester-fee/student-semester-fee.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidenavComponent,
    HomeComponent,
    PersonalInfoComponent,
    ProfilePicComponent,
    AddressComponent,
    ProfileComponent,
    SemesterResultComponent,
    CourseResultComponent,
    StudentResultComponent,
    StudentFeeComponent,
    StudentSemesterFeeComponent,
    PaymentComponent,
    PersonListComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterLink,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
