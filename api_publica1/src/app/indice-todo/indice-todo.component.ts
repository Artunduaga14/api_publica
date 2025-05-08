
import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todos.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-indice-todo',
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './indice-todo.component.html',
  styleUrl: './indice-todo.component.css'
})
export class IndiceTodoComponent implements OnInit {
  todos: Todo[] = [];
  columnas: string[] = ['id', 'title', 'completed', 'acciones'];

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

   editar(todo: Todo) {
      alert(`Simular editar usuario: ${todo.title}`);
    }
  
    eliminar(todo: Todo) {
      alert(`Simular eliminar usuario: ${todo.title}`);
    }
}
