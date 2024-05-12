import { Component, OnInit } from '@angular/core';
import { EducationData } from 'src/app/config/app-config';
import {
  faAngleUp,
  faAngleDown,
  faGraduationCap,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  // App Config
  educationData = EducationData;
  educationList: Education[] = [];

  // Font Awesome
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faGraduationCap = faGraduationCap;
  faCircle = faCircle;

  // Component Variables
  isCollapsed = false;

  ngOnInit(): void {
    this.educationList = this.educationData['data'];
  }

  isExpanded() {
    this.isCollapsed = !this.isCollapsed;
  }
}
