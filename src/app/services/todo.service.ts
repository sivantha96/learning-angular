import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from '../models/Todos';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http:HttpClient) { }

  // get todos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl + "?_limit=5");
  }

  // toggle completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = this.todosUrl + "/" + todo.id
    return this.http.put<Todo>(url, todo, httpOptions)
  }

  // delete todo
  deleteTodo(todo: Todo):Observable<Todo> {
    const url = this.todosUrl + "/" + todo.id;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // add todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
  }
}


