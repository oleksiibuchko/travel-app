import { Component, HostListener, Input } from '@angular/core';
import { IFormControl } from '../../interfaces/radio-button.interface';
import { ILink } from '../../interfaces/link.interface';

@Component({
  selector: 'app-organism-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() image: string;
  @Input() formRadioButtons: IFormControl[];
  @Input() citiesList: IFormControl[];
  @Input() classesList: IFormControl[];
  @Input() guestsList: IFormControl[];
  @Input() airlinesList: IFormControl[];
  @Input() articleText: string;
  @Input() linksList: ILink[];

  screenWidth = window.outerWidth;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.outerWidth;
  }
}
