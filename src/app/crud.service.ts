import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  API_URL = 'http://localhost:3000/todo';
  constructor(private http: HttpClient) {}

  getTodo() {
    return this.http.get(this.API_URL);
  }

  addTodo(todo: string, done: boolean) {
    return this.http.post(this.API_URL, {
      todo: todo,
      done: done,
    });
  }

  updateTodo(id: number, todo: string, done: boolean) {
    return this.http.put(this.API_URL + '/' + id, {
      todo: todo,
      done: done,
    });
  }

  deleteTodo(id: number) {
    return this.http.delete(this.API_URL + '/' + id);
  }
}
