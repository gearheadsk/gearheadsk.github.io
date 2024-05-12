import { Component, OnInit } from '@angular/core';
import { SkillsData } from 'src/app/config/app-config';
import {
  faAngleUp,
  faAngleDown,
  faCode,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  faJs,
  faSass,
  faHtml5,
  faCss3,
  faPython,
  faSquareGit,
} from '@fortawesome/free-brands-svg-icons';
import { Skills } from 'src/app/models/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  // App Config
  skillsData = SkillsData;

  // Font Awesome
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faAngular = faAngular;
  faJs = faJs;
  faCode = faCode;
  faSass = faSass;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faPython = faPython;
  faSquareGit = faSquareGit;
  faCircleCheck = faCircleCheck;

  // Component Variables
  isCollapsed = false;
  skills: Skills[] = [
    {
      icon: faAngular,
      text: 'Angular',
    },
    {
      icon: faJs,
      text: 'JavaScript',
    },
    {
      icon: faCode,
      text: 'TypeScript',
    },
    {
      icon: faSass,
      text: 'SASS',
    },
    {
      icon: faHtml5,
      text: 'HTML5',
    },
    {
      icon: faCss3,
      text: 'CSS3',
    },
    {
      icon: faPython,
      text: 'Python',
    },
    {
      icon: faSquareGit,
      text: 'Git',
    },
  ];

  ngOnInit(): void {
    // Empty ngOnInit
  }

  isExpanded() {
    this.isCollapsed = !this.isCollapsed;
  }
}
