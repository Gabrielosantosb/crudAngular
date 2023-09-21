import {Injectable, } from '@angular/core';
import {Observable, tap, map, of, filter, find, reduce, take, catchError} from "rxjs";
import {RequestCreate, RequestUpdate, ResponseUpdate,   User} from "./users.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = "http://localhost:8080/api/tutorials"

  constructor(private http: HttpClient) {
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  getUser(id: string) :Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`).pipe(
      take(1),
      catchError((res)=>{
        console.log(res)
        if(res.status == 404) alert('Não encontrado!')
        return of()
      })
    )
  }
  createUser(request: RequestCreate): Observable<User[]> {
    console.log('Chamou o método createUser()');
    return this.http.post<User[]>(this.url, request).pipe(tap(res =>{
      console.log('Resposta POST: ', res)
    }),
      catchError((res)=>{
        console.log(res)
        return of()
      })
    )
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
  deleteAllUsers(): Observable<User[]> {
    return this.http.delete<User[]>(this.url)
  }

  deleteUser(id: string): Observable<User> {
    console.log('Chamou o método deleteUser()');
    const _url = `${this.url}/${id}`
    return this.http.delete<User>(_url);
  }

}


