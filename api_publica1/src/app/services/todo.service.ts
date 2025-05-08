import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todos.model';
import { BaseService } from './servicio-generico.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends BaseService<Todo> {
  constructor(http: HttpClient) {
    super(http, 'https://jsonplaceholder.typicode.com/todos');
  }
}
 