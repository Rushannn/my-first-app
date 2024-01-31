import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, first, of, switchMap, take, tap } from "rxjs";
import { AuthService } from "./auth.service";
import { IAuth } from "../models/IAuth.model";
import { JwtService } from "./jwt.service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthState {

  public authTokenSubject = new BehaviorSubject<string | null>(null);

  private userSubject = new BehaviorSubject<IAuth | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor(
    private authService: AuthService,
    private jwt: JwtService,
    private router: Router
  ) { }

  public signup(credentials: IAuth) {
    this.authService.signUp(credentials)
      .pipe(
        tap(({ authToken }) => {
          this.authTokenSubject.next(authToken);
          this.jwt.saveToken(authToken);
        }),
        catchError((err) => {
          console.error('Login error', err);
          return of(null);
        }),
        switchMap(() => this.getCurrentUser())
      )
      .subscribe()
  }

  public getUser() {
    return this.userSubject.getValue();
  }

  login(credentials: IAuth) {
    this.authService.login(credentials)
      .pipe(
        take(1),
        tap(
          ({ authToken }) => {
            this.jwt.saveToken(authToken);
          }
        ),
        catchError((err) => {
          console.error('Login error', err);
          return of(null);
        }),
        switchMap(() => this.getCurrentUser())
      )
      .subscribe()
  }

  getCurrentUser(): Observable<IAuth | null> {
    return this.authService.getCurrentUser()
      .pipe(
        first(),
        tap((res) => {
          this.userSubject.next(res);
          this.router.navigate(['/todo'])
        }),
        catchError((err) => {
          console.error('Error getting current user', err);
          return of(null);
        })
      );
  }

  logout() {
    this.userSubject.next(null);
    this.jwt.destroyToken();
    this.router.navigate(['login']);
  }
}
