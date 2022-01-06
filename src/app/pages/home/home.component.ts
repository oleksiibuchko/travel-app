import { Component } from '@angular/core';
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
export class HomeComponent {
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
}
