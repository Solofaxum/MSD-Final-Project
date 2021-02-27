import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p>
      The page you are looking for does not exist.sorry:<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    </p>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
