import { Component, OnInit } from '@angular/core';
import { FooterData } from 'src/app/config/app-config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerData = FooterData;
  ngOnInit(): void {
    // Empty ngOnInit
  }
}
