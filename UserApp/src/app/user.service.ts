import { Injectable } from '@angular/core';
import { User } from './User';
import { USERS } from './mock-users';
import {Observable, of } from 'rxjs';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8081/web_war_exploded/Controller";

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.url, {params: new HttpParams().set('action', 'GetUsersAngular')});
  }

  setStatus(user: User): void {
    console.log("hier in de userservice");
    var body = new HttpParams().append('state', user.status).append('userId', user.id);
    const header = new HttpHeaders().set('Content-Type', "application/x-www-form-urlencoded");

    this.http.post<any>(this.url + '?action=ChangeStatus&status=' + user.status + "&userId=" + user.id, body, {headers: header}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
