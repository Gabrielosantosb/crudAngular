import {Injectable, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {RequestCreate, RequestUpdate, ResponseUpdate, ResponseUser, ResponseUsers, User} from "./users.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = "http://localhost:8080/api/tutorials"

  constructor(private http: HttpClient) {
  }
  getUsers(): Observable<User[]> {
    console.log('Chamou o método getUsers()');
    return this.http.get<User[]>(this.url).pipe(
      tap((response) => {
        console.log('Resposta do GET:', response);
      })
    );
  }

  getUser(id: string) :Observable<User[]>{
    console.log('Chamou o metodo getUser')
    return this.http.get<User[]>(`${this.url}/${id}`)
  }
  createUser(request: RequestCreate): Observable<User[]> {
    console.log('Chamou o método createUser()');
    return this.http.post<User[]>(this.url, request).pipe(tap(res =>{
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
    const _url = `"http://localhost:8080/api/tutorials/${id}`
    return this.http.delete<any>(_url);
  }
}
