import { Component, OnInit } from '@angular/core';
import { WorkData } from 'src/app/config/app-config';
import {
  faAngleUp,
  faAngleDown,
  faCodeBranch,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Works } from 'src/app/models/works';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  // App Config
  workData = WorkData;
  workList: Works[] = [];

  // Font Awesome
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faCodeBranch = faCodeBranch;
  faCircle = faCircle;

  // Component Variables
  isCollapsed = false;

  ngOnInit(): void {
    this.workList = this.workData['data'];
  }

  isExpanded() {
    this.isCollapsed = !this.isCollapsed;
  }
}
