import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, first, of, take, tap } from "rxjs";
import { AuthService } from "./auth.service";
import { IAuth } from "../models/IAuth.model";
import { JwtService } from "./jwt.service";

@Injectable({
  providedIn: 'root'
})
export class AuthState {

  public authTokenSubject = new BehaviorSubject<string | null>(null);

  private userSubject = new BehaviorSubject<IAuth | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor(
    private authService: AuthService,
    private jwt: JwtService
  ) { }

  public signup(credentials: IAuth) {
    console.log('AuthState signup')
    this.authService.signUp(credentials)
      .subscribe({
        next: ({ authToken }) => {
          console.log('token', authToken);
          this.authTokenSubject.next(authToken);
          this.jwt.saveToken(authToken);
        },
        error: (err) => {
          console.error('Signup error', err)
        }
      })
  }

  public getUser(){
    return this.userSubject.getValue();
  }

  // login(credentials: IAuth) {
  //   this.authService.login(credentials)
  //     .pipe(take(1))
  //     .subscribe({
  //       next: (({ authToken }) => {
  //         this.jwt.saveToken(authToken);
  //       }),
  //       error: ((err) => console.error('Login error', err))
  //     })
  // }

  login(credentials: IAuth) {
    this.authService.login(credentials)
      .pipe(
        take(1),
        tap(
          ({ authToken }) => {
            console.log('authToken', authToken);
            this.jwt.saveToken(authToken);
          }
        ),
        catchError((err) => {
          console.error('Login error', err);
          return of(null);
        })
      )
      .subscribe()
  }

  getCurrentUser() {
    this.authService.getCurrentUser()
      .pipe(first(),
        tap((res) => this.userSubject.next(res)),
        catchError((err) => {
          console.error('Login error', err);
          return of(null);
        }))
      .subscribe()
  }
}
