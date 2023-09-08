import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module'; // Importe o AppRoutingModule aqui
import { HttpClientModule } from '@angular/common/http';
import {RouterLink, RouterOutlet} from "@angular/router";
import { CreateUserComponent } from './users/create-user/create-user.component';
import {FormsModule} from "@angular/forms"; // Importe o HttpClientModule aqui

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
