import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthState {

  private authTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private authService: AuthService
  ) {  }


}
