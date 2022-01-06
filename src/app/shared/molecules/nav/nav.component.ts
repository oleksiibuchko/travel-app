import { Component, Input } from '@angular/core';
import { INavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-molecule-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() navItems: INavItem[];
}
