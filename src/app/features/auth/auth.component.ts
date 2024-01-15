import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  isLoginForm: boolean = false;

  authForm!: any;

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
  }

  onSubmit(authForm: NgForm) {
    console.log(authForm.value)
  }



}
