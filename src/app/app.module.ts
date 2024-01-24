import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TodoModule } from './todo/todo.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/layout/header/header.component';
import { MaterialModule } from './shared/material/material.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AuthComponent } from './features/auth/auth.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodoModule,
    NoopAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
