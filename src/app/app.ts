import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  submitted = false;
  form!: FormGroup;

  constructor() {}

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue(); // typed & non-null
    console.log('Submit: ', value);
  }

  reset() {
    this.submitted = false;
    this.form.reset({
      firstname: '',
      lastname: '',
      email: '',
      address: {street: '', city: ''}
    });
  }

  //<editor-fold desc="// Helper methods ...">
  get fnameCtrl() {
    return this.form.controls['firstname'];
  }

  get lnameCtrl() {
    return this.form.controls['lastname'];
  }

  get emailCtrl() {
    return this.form.controls['email'];
  }

  get addressGroup() {
    return this.form.controls['address'] as FormGroup;
  }

  get streetCtrl() {
    return this.addressGroup.controls['street'];
  }

  get cityCtrl() {
    return this.addressGroup.controls['city'];
  }


  shouldShowInvalid(ctrl: { invalid: boolean; touched: boolean; dirty: boolean }) {
    return ctrl.invalid && (ctrl.touched || ctrl.dirty || this.submitted);
  }
  //</editor-fold>

}
