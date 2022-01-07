import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  airlinesList, articleText,
  citiesList, classesList, externalLinks,
  formRadioButtons, guestsList,
  headerNavItems,
  navItems,
  sideBarNavItems
} from '../../mocks/mocks';

@Component({
  selector: 'app-page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  logoImage = 'https://via.placeholder.com/350x90?text=Travel+App';
  contentImage = 'https://via.placeholder.com/700x420?text=Travel+App';
  headerNavItems = headerNavItems;
  navItems = navItems;
  sideBarNavItems = sideBarNavItems;
  formRadioButtons = formRadioButtons;
  citiesList = citiesList;
  classesList = classesList;
  guestsList = guestsList;
  airlinesList = airlinesList;
  articleText = articleText;
  linksList = externalLinks;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.headerNavItems[0]) {
      this.router.navigate([this.headerNavItems[0].link]);
    }
  }
}
