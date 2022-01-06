import { Component, Input } from '@angular/core';
import { IFormControl } from '../../interfaces/radio-button.interface';

@Component({
  selector: 'app-organism-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() radioItems: IFormControl[];
  @Input() citiesList: IFormControl[];
  @Input() classesList: IFormControl[];
  @Input() guestsList: IFormControl[];
  @Input() airlinesList: IFormControl[];
}
