import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../modelo/Tarefa';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  //Selecionar
  selecionar(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.url);
  }

  //Cadastrar
  cadastrar(obj: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.url, obj);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`); // For deleting a task by id
}
}
