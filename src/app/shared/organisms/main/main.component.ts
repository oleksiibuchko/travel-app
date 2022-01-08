import { Component, Input } from '@angular/core';
import { INavItem } from '../../interfaces/nav-item.interface';
import { IFormControl } from '../../interfaces/form-control.interface';
import { ILink } from '../../interfaces/link.interface';

@Component({
  selector: 'app-organism-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
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
