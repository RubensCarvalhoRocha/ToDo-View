import { Component } from '@angular/core';
import { Tarefa } from '../modelo/Tarefa';
import { TarefaService } from '../servico/tarefa.service';

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

  constructor(private servico: TarefaService) {}

  selecionar(): void {
    this.servico.selecionar().subscribe((retorno) => (this.tarefas = retorno));
  }

  cadastrar(): void {
    this.servico.cadastrar(this.tarefa).subscribe((retorno) => {
      //adicionar o cliente no vetor
      this.tarefas.push(retorno);
    });

    //Limpar formulario
    this.tarefa = new Tarefa();

    //Alerta
    alert('Tarefa cadastrada com sucesso!');

    //Logs
    console.log(this.tarefas);
  }

  deletar(): void {
    this.servico.deletar(this.tarefa.id).subscribe((retorno) => {
      //Obter posicao do vetor onde esta o cliente
      let posicao = this.tarefas.findIndex((obj) => {
        return obj.id == this.tarefa.id;
      });

      //Remover Tarefa do Vetor
      this.tarefas.splice(posicao, 1);

      //Limpar Formulario
      this.tarefa = new Tarefa();

      alert('Tarefa removida com sucesso!');
    });
  }

  ngOnInit() {
    this.selecionar();
  }
}
