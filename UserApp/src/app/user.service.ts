import { Injectable } from '@angular/core';
import { User } from './User';
import { USERS } from './mock-users';
import {Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() : Observable<User[]> {
    return of(USERS);
  }
}
