import { Component, Input } from '@angular/core';
import { INavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-molecule-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() navItems: INavItem[];
}
