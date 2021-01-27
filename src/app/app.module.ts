import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CourseModule } from './course/course.module';

import { AppComponent } from './app.component';
import { CoursesListComponent } from './course/components/courses-list/courses-list.component';
import { CreateCourseComponent } from './course/components/create-course/create-course.component';

const routes = [
  {
    path: 'courses',
    component: CoursesListComponent
  },
  {path: 'create-course', component: CreateCourseComponent},
  {path: '**', redirectTo: 'courses'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
