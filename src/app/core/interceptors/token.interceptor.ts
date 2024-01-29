import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthState } from "../services/auth.state";
import { JwtService } from "../services/jwt.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private jwt: JwtService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.jwt.getToken();

    const request = req.clone({
      setHeaders: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    return next.handle(request);
  }
}
