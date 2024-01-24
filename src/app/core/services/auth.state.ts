import { Injectable } from "@angular/core";
import { BehaviorSubject, take } from "rxjs";
import { AuthService } from "./auth.service";
import { IAuth } from "../models/IAuth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthState {

  public authTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private authService: AuthService
  ) { }

  signup(credentials: IAuth) {
    console.log('AuthState signup')
    this.authService.signUp(credentials)
      .subscribe({
        next: ({ authToken }) => {
          console.log('token', authToken);
          this.authTokenSubject.next(authToken);
          localStorage.setItem('token', authToken);
        },
        error: (err) => {
          console.error('Signup error', err)
        }
      })
  }

  login(credentials: IAuth) {
    this.authService.login(credentials)
      .pipe(take(1))
      .subscribe({
        next: (({ authToken }) => {
          this.authTokenSubject.next(authToken);
        }),
        error: ((err) => console.error('Login error', err))
      })
  }
}
