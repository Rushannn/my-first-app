import { Component } from '@angular/core';
import { AuthState } from '../../services/auth.state';
import { Observable } from 'rxjs';
import { IAuth } from '../../models/IAuth.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user$: Observable<IAuth | null>;

  constructor(
    private authState: AuthState
  ){
    this.user$ = this.authState.user$;
  }

}
