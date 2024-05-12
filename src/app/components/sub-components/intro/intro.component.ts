import { Component, OnInit } from '@angular/core';
import { ProfileImage, IntroData } from 'src/app/config/app-config';
import {
  faMoon,
  faSun,
  faClipboard,
} from '@fortawesome/free-regular-svg-icons';
import {
  faEnvelope,
  faGlobe,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Links } from 'src/app/models/links';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  // App Config
  profileImage = ProfileImage;
  introData = IntroData;

  // Font Awesome
  faMoon = faMoon;
  faSun = faSun;
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faGlobe = faGlobe;
  faFileContract = faFileContract;
  faClipboard = faClipboard;

  // Component Variables
  darkTheme: boolean = true;
  showInfo: boolean = false;
  socialLinks: Links[] = [
    {
      icon: faLinkedin,
      text: 'SK-LinkedIn',
      link: 'https://www.linkedin.com/in/sankarkumar-s-ab3ba444/',
    },
    {
      icon: faGithub,
      text: 'SK-Github',
      link: 'https://github.com/gearheadsk',
    },
    {
      icon: faFileContract,
      text: 'SK-Profile',
      link: 'https://drive.google.com/file/d/11n1eWLcUf3lASe825k8leKVKlgBnCEn6/view?usp=sharing',
    },
  ];

  ngOnInit(): void {
    // Empty ngOnInit
  }

  toggleTheme() {
    if (this.darkTheme) {
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
    this.darkTheme = !this.darkTheme;
  }

  copyMail() {
    navigator.clipboard.writeText(this.introData.mail).then(() => {
      this.showInfo = true;
      window.setTimeout(() => {
        this.showInfo = false;
      }, 2000);
    });
  }
}
