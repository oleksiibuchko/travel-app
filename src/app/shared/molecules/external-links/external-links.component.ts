import { Component, Input } from '@angular/core';
import { ILink } from '../../interfaces/link.interface';

@Component({
  selector: 'app-molecule-external-links',
  templateUrl: './external-links.component.html',
  styleUrls: ['./external-links.component.scss']
})
export class ExternalLinksComponent {
  @Input() linksList: ILink[];
}
