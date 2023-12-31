import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';
import { Messagerie } from '../Models/messagerie';
@Injectable({
  providedIn: 'root',

})
export class UsersService {

  private httpHeaders = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
  }
  constructor(private httpClient: HttpClient) {


  }
  getAll() {
    console.log(environment.apiUrl);
    return this.httpClient.get<User[]>(`${environment.apiUrl}/users/`, this.httpHeaders);

  }

  save(user: User) {
    console.log(environment.apiUrl);
    return this.httpClient.post<User>(`${environment.apiUrl}/users/`, user, this.httpHeaders);

  }

  getMessages() {
    console.log(environment.apiUrl);
    return this.httpClient.get<Messagerie[]>(`${environment.apiUrl}/messagerie`, this.httpHeaders);

  }
}


