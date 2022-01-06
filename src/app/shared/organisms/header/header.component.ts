import { Component, Input } from '@angular/core';
import { INavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-organism-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() logoImage: string;
  @Input() headerNavItems: INavItem[];
}
