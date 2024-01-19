import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthState } from "../services/auth.state";

@Injectable({ providedIn: "root" })
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authState: AuthState
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authState.authTokenSubject.getValue()

    const request = req.clone({
      setHeaders: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    return next.handle(request);

  }
}
