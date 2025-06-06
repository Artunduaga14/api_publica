import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseService<T> {
  constructor(
    protected http: HttpClient,
    private baseUrl: string // ejemplo: https://jsonplaceholder.typicode.com/users
  ) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, item);
  }

  update(id: number, item: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, item);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
