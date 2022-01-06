import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { INavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-organism-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss']
})
export class HeaderActionsComponent {
  @Input() headerNavItems: INavItem[];

  searchControl = new FormControl('');
}
