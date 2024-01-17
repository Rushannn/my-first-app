import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  isLoginForm: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
  }

  onSubmit(form: NgForm) {
    if (this.isLoginForm) {
      //login
    } else {
      this.authService.signUp(form.value)
        .subscribe({
          next: res => {
            console.log('res', res)
          },
          error: err => {
            console.error('Ошибка регистрации', err)
          }
        }
        )
    }

    form.reset();
  }



}
