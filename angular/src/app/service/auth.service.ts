import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../data_model/user';
import { HttpClient } from '@angular/common/http';
import { Status } from '../data_model/status';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser = new User();

  constructor(private http: HttpClient) {
      this.currentUser.status = Status.LOGGED_OUT;
      this.currentUserSubject = new BehaviorSubject<User>(this.currentUser);
  }

  public get currentUserSub(): BehaviorSubject<User> {
      return this.currentUserSubject;
  }

  public get currentUserName(): string {
    return this.currentUser.username;
  }

  login(username, password) {
      this.currentUser.status = Status.LOGGED_IN_PROGRESS;
      this.currentUserSubject.next(this.currentUser);
      return this.http.post<any>(`http://localhost:3000/api/login`, { username, password })
          .pipe(map(message => {
              if (message.id) {
                this.currentUser = {
                  id: message.id,
                  username,
                  password,
                  status: Status.LOGGED_IN,
                };
              } else {
                this.currentUser.status = Status.LOGGED_OUT;
              }
              this.currentUserSubject.next(this.currentUser);
              return message;
          }));
  }

  logout() {
      // remove user from local storage and set current user to null
      this.currentUser = new User();
      this.currentUser.status = Status.LOGGED_OUT;
      this.currentUserSubject.next(this.currentUser);
  }
}
