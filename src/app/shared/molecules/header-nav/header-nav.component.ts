import { Component, Input } from '@angular/core';
import { INavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-molecule-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {
  @Input() headerNavItems: INavItem[];
}
