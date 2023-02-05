import { Component } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LDprg';

  constructor(private router: Router) { }

  ngOnInit() {
    this.setUpAnalytics();
  }

  setUpAnalytics() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        gtag("config", "G-55C8CP38WR",
          {
            page_path: event.urlAfterRedirects
          }
        );
      });
  }
}
