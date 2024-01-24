import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { IAuth } from "../models/IAuth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = environment.AUTH_URL

  constructor(
    private http: HttpClient
  ) { }

  signUp(credentials: IAuth) {
    const url = `${this.api}/auth/signup`;
    return this.http.post<any>(url, credentials);
  }

  login(credentials: IAuth) {
    const url = `${this.api}/auth/login`;
    return this.http.post<{ authToken: string }>(url, credentials);
  }


}
