import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';
@Injectable({
  providedIn: 'root',

})
export class UsersService {

  private httpHeaders = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH,OPTIONS'
    })
  }
  constructor(private httpClient: HttpClient) {


  }
  getAll() {

    return this.httpClient.get<User[]>(`${environment.apiUrl}/users`);
    console.log(environment.apiUrl);
  }
}


