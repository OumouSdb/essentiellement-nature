import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';
import { Messagerie } from '../Models/messagerie';
import { Article } from '../Models/article';
import { Observable, Observer } from 'rxjs';
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

  saveMsg(msg: Messagerie) {
    console.log(environment.apiUrl);
    return this.httpClient.post<Messagerie>(`${environment.apiUrl}/messagerie/save`, msg, this.httpHeaders);

  }

  saveArticle(article: Article) {
    console.log(environment.apiUrl);
    return this.httpClient.post<Article>(`${environment.apiUrl}/article/save`, article, this.httpHeaders);

  }

  getAllArticle() {
    console.log(environment.apiUrl);
    return this.httpClient.get<Article>(`${environment.apiUrl}/article`, this.httpHeaders);

  }


}


