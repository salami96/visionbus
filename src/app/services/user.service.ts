import { Injectable } from '@angular/core';
import { User } from '../models/entities';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = null;
  constructor(private http: HttpClient) { }

  login (e: string, s: string): Observable<User> {
    const obs: Observable<User> = this.http.post<User>('https://sendproms.herokuapp.com/login',
    {
      'email': e,
      'senha': s
    });
    obs.subscribe(resp => {
      this.user = resp;
    });
    return obs;
  }
}
