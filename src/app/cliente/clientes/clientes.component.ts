import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../core/model/Cliente';
import {ServicoService} from '../servico.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente = new Cliente();
  clienteArray = [];

  constructor(private service: ServicoService) {
  }

  ngOnInit() {
    this.salvar();
  }

  salvar() {
    this.service.listarTodos()
      .then(resultado => {
        this.clienteArray = resultado;
        console.log('caiu aqui TELA');
        console.log(this.clienteArray);
      });
  }
}
