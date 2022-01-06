import { Component, Input } from '@angular/core';
import { INavItem } from '../../interfaces/nav-item.interface';
import { IFormControl } from '../../interfaces/radio-button.interface';
import { ILink } from '../../interfaces/link.interface';

@Component({
  selector: 'app-template-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() logoImage: string;
  @Input() headerNavItems: INavItem[];
  @Input() navItems: INavItem[];
  @Input() sideBarNavItems: INavItem[];
  @Input() contentImage: string;
  @Input() formRadioButtons: IFormControl[];
  @Input() citiesList: IFormControl[];
  @Input() classesList: IFormControl[];
  @Input() guestsList: IFormControl[];
  @Input() airlinesList: IFormControl[];
  @Input() articleText: string;
  @Input() linksList: ILink[];
}
