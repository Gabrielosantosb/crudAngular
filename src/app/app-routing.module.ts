import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import {CreateUserComponent} from "./users/create-user/create-user.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/create', component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
