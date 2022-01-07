import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { FormComponent } from './form.component';
import { airlinesList, citiesList, classesList, formRadioButtons, guestsList } from '../../../mocks/mocks';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        CommonModule,
        MatRadioModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatCardModule
      ],
      declarations: [FormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.radioItems = formRadioButtons;
    component.citiesList = citiesList;
    component.classesList = classesList;
    component.guestsList = guestsList;
    component.airlinesList = airlinesList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error if none of required field were selected', () => {
    const submitButton = fixture.debugElement.query(By.css('[type="submit"]')).nativeElement;

    submitButton.click();
    fixture.detectChanges();

    const errorComponent = fixture.debugElement.query(By.css('mat-error'));

    expect(errorComponent).toBeTruthy();
  });

  it('should show error if not all of the required field selected', () => {
    const submitButton = fixture.debugElement.query(By.css('[type="submit"]')).nativeElement;

    component.form.controls.from.setValue(1);
    component.form.controls.departOn.setValue(new Date());

    submitButton.click();
    fixture.detectChanges();

    const errorComponent = fixture.debugElement.query(By.css('mat-error'));

    expect(errorComponent).toBeTruthy();
  });

  it('should not show error if required fields selected', () => {
    const submitButton = fixture.debugElement.query(By.css('[type="submit"]')).nativeElement;

    component.form.controls.from.setValue(1);
    component.form.controls.to.setValue(1);
    component.form.controls.departOn.setValue(new Date());
    component.form.controls.returnOn.setValue(new Date());

    submitButton.click();
    fixture.detectChanges();

    const errorComponent = fixture.debugElement.query(By.css('mat-error'));

    expect(errorComponent).toBeNull();
  });

  it('should set the trip type control value on init', () => {
    expect(component.form.controls.tripType.value).toEqual(component.radioItems[0].value);
  });
});
