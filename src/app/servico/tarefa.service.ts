import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"
import { Tarefa } from '../modelo/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  //Url da API
  private url:string = 'http://localhost:8080'

  constructor(private http:HttpClient) { }

  //Metodo para selecionar todas as tarefas
  selecionar():Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.url);
  }

  //Método Cadastrar tarefa
  cadastrar(obj:Tarefa):Observable<Tarefa>{
    return this.http.post<Tarefa>(this.url, obj);
  }

}
