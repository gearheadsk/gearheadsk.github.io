import { Component, OnInit } from '@angular/core';
import { ProfileData } from 'src/app/config/app-config';
import {
  faAngleUp,
  faAngleDown,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  // App Config
  profileData = ProfileData;

  // Font Awesome
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faCircleCheck = faCircleCheck;

  // Component Variables
  isCollapsed = false;

  ngOnInit(): void {
    // Empty ngOnInit
  }

  isExpanded() {
    this.isCollapsed = !this.isCollapsed;
  }
}
