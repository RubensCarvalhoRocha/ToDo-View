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

    //DELETAR
    deletar(id: number): void {
      this.servico.deletar(id).subscribe(
        () => {
          const posicao = this.tarefas.findIndex(tarefa => tarefa.id === id);

          if (posicao !== -1) {
            this.tarefas.splice(posicao, 1);
          }

          console.log('Tarefa removida com sucesso!');
        },
        erro => {
          console.error('Erro ao deletar tarefa:', erro);
        }
      );
    }

  ngOnInit() {
    this.selecionar();
  }
}
