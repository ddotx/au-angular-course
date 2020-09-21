import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;
  course = COURSES[0]

  startDate = new Date(2000, 0, 1) // 1 Jan 2000


  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;


  constructor() {

  }

  ngAfterViewInit() {

  }

  onCourseSelected(course: Course) {
    console.log('App Component - click event bubbled...', course)
  }

}
