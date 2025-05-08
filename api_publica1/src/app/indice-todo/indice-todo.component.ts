// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-indice-todo',
//   imports: [],
//   templateUrl: './indice-todo.component.html',
//   styleUrl: './indice-todo.component.css'
// })
// export class IndiceTodoComponent {

// }

import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todos.model';

@Component({
  selector: 'app-indice-todo',
  imports: [],
  templateUrl: './indice-todo.component.html',
  styleUrl: './indice-todo.component.css'
})
export class IndiceTodoComponent implements OnInit {
  todos: Todo[] = [];

  todoService = inject(TodoService)

  ngOnInit(): void {
    this.todoService.getAll().subscribe({
      next: (sdsassa) => {
        this.todos = sdsassa;
        console.log('todos recibidos:', this.todos);
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
   });
  }
}
