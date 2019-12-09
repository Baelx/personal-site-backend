import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginData } from '../../models/login-data.model';

@Injectable({providedIn: 'root'})
export class LoginService {

  constructor(private http: HttpClient) {}
}
