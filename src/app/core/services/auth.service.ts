import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { IAuth } from "../models/IAuth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(credentials: IAuth) {
    const url = `${environment.api_url}/signup`;
    return this.http.post<any>(url, credentials);
  }


}
