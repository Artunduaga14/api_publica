import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { BaseService } from './servicio-generico.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  constructor(http: HttpClient) {
    super(http, 'https://jsonplaceholder.typicode.com/users');
  }
}
 