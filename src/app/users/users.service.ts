import {Injectable, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {RequestCreate, RequestUpdate, ResponseUpdate, ResponseUser, ResponseUsers} from "./users.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = "http://localhost:8080/api/tutorials"

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<ResponseUsers> {
    console.log('Chamou o método getUsers()');

    return this.http.get<ResponseUsers>(this.url).pipe(
      tap((response) => {
        console.log('Resposta do GET:', response);
      })
    );
  }

  getUser(id: string): Observable<ResponseUser> {
    console.log('Chamou o método getUser()');
    const _url = `${this.url}/${id}`
    return this.http.get<ResponseUser>(_url)


  }

  createUser(request: RequestCreate): Observable<ResponseUsers> {
    console.log('Chamou o método createUser()');
    return this.http.post<ResponseUsers>(this.url, request).pipe(tap(res =>{
      console.log('Resposta POST: ', res)
    }))
  }

  updateUser(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    console.log('Chamou o método updateUser()');
    const _url = `${this.url}/${id}`
    return this.http.put<ResponseUpdate>(_url, request).pipe(tap(
      res=>{
        console.log('Resposta PUT: ',res)
      }
    ));
  }

  deleteUser(id: string): Observable<any> {
    console.log('Chamou o método deleteUser()');
    const _url = `${this.url}/${id}`
    return this.http.delete<any>(_url);
  }
}
