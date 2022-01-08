import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { IFormControl } from '../../interfaces/form-control.interface';

@Component({
  selector: 'app-organism-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @Input() radioItems: IFormControl[];
  @Input() citiesList: IFormControl[];
  @Input() classesList: IFormControl[];
  @Input() guestsList: IFormControl[];
  @Input() airlinesList: IFormControl[];

  form = new FormGroup({
    tripType: new FormControl(),
    from: new FormControl(null, Validators.required),
    to: new FormControl(null, Validators.required),
    departOn: new FormControl(null, Validators.required),
    returnOn: new FormControl(null, Validators.required),
    guests: new FormControl(),
    classes: new FormControl(),
    airlines: new FormControl(),
    includeNear: new FormControl()
  });
  isErrorCanBeShown = false;

  ngOnInit(): void {
    if (this.radioItems[0]) {
      this.formControls.tripType.setValue(this.radioItems[0].value);
    }
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.isErrorCanBeShown = true;
    if (this.form.invalid) {
      return;
    }
    this.isErrorCanBeShown = false;
  }
}
