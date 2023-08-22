import { Component } from '@angular/core';
import { Tarefa } from '../modelo/Tarefa';
import { TarefaService } from '../servico/tarefa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  headers = ['Tarefa', 'Prioridade', 'Realizado', 'Delete'];

  //Objeto do tipo Tarefa
  tarefa = new Tarefa();

  //Jason de Tarefas
  tarefas: Tarefa[] = [];

  //Construtor
  constructor(private servico: TarefaService) {}

  //Metodo  Selecionar Tarefas
  selecionar(): void {
    this.servico.selecionar().subscribe((retorno) => (this.tarefas = retorno));
  }

  //Método Cadastrar tarefa
  cadastrar(): void {
    this.servico.cadastrar(this.tarefa).subscribe((retorno) => {
      this.tarefas.push(retorno);
    });
    console.log(this.tarefas);
  }

  //Metodo de Inicialização
  ngOnInit() {
    this.selecionar();
  }
}
