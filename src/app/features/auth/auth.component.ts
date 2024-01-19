import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthState } from 'src/app/core/services/auth.state';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  isLoginForm: boolean = false;

  constructor(
    private authState: AuthState
  ) { }

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
  }

  onSubmit(form: NgForm) {
    if (this.isLoginForm) {
      //login
    } else {
      console.log('AuthComponent signup')
      this.authState.signup(form.value);
    }

    form.reset();
  }



}
