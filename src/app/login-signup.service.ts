import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  apiUrl = 'https://authmedicsoft.herokuapp.com/';

  constructor(private http: HttpClient) { }

  user() {
    return this.http.get(this.apiUrl + 'api/v1/test')
  }
}
