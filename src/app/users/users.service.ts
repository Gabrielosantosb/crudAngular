import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {RequestCreate, ResponseUsers} from "./users.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = "https://reqres.in/api/users"
  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.url);
  }
  getUser(id: string): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.url);
  }
  createUser(request: RequestCreate):Observable<ResponseUsers>{
    return this.http.post<ResponseUsers>(this.url, request)
  }
}
