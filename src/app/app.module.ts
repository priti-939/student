import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentComponent} from './student/student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { AddStudentComponent } from './student/add-student/add-studentcomponent';
import { SearchStudentComponent } from './student/search-student/search-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EditStudentComponent,
    AddStudentComponent,
    SearchStudentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
