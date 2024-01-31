import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { IAuth } from "../models/IAuth.model";
import { JwtService } from "./jwt.service";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = environment.AUTH_URL

  constructor(
    private http: HttpClient,
    private jwt: JwtService
  ) { }

  signUp(credentials: IAuth) {
    const url = `${this.api}/auth/signup`;
    return this.http.post<any>(url, credentials);
  }

  login(credentials: IAuth) {
    const url = `${this.api}/auth/login`;
    return this.http.post<{ authToken: string }>(url, credentials);
  }

  getCurrentUser() {
    const token = this.jwt.getToken();
    const url = `${this.api}/auth/me`;
    return this.http.get<IAuth>(url);
  }

}
