import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './services/course.service';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseService]
})
export class CourseModule { }
