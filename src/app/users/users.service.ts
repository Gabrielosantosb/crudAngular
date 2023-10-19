import {Injectable,} from '@angular/core';
import {Observable, tap, map, of, filter, find, reduce, take, catchError} from "rxjs";
import {User} from "./users.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // private url = "http://localhost:8080/api/tutorials"
  private url = "https://localhost:5001/api/person"

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      catchError(err => {
        alert("Falha ao conectar servidor")
        return of([])
      })
    )
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`).pipe(
      take(1),
      catchError((res) => {

        if (res.status == 404) alert('Não encontrado!')
        return of()
      })
    )
  }

  createUser(request: User): Observable<User> {
    console.log('Chamou o método createUser()');
    return this.http.post<User>(this.url, request).pipe(catchError(
      err => {
        alert("Falha ao conectar servidor")
        return of()
      }
    ))
  }

  updateUser(id: string, request: User): Observable<User> {
    console.log('Chamou o método updateUser()');
    const _url = `${this.url}/${id}`
    return this.http.put<User>(_url, request)
      ;
  }

  deleteAllUsers(): Observable<User[]> {
    return this.http.delete<User[]>(this.url).pipe(catchError(
      err => {
        alert("Falha ao conectar ao servidor")
        return of()
      }
    ))
  }

  deleteUser(id: string): Observable<User> {
    console.log('Chamou o método deleteUser()');
    const _url = `${this.url}/${id}`
    return this.http.delete<User>(_url);
  }

}


