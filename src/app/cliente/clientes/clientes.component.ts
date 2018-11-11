import {Component, OnInit, ViewChild} from '@angular/core';
import {Cliente} from '../../core/model/Cliente';
import {ServicoService} from '../servico.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  @ViewChild('tabela') grid;
  cliente = new Cliente();
  clienteArray = [];
  riscoArray = [
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'}
  ];

  constructor(private service: ServicoService) {
  }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.listarTodos()
      .then(resultado => {
        this.clienteArray = resultado;
      });
  }

  salvar(form: FormControl) {
    this.service.salvar(this.cliente);
    form.reset();
    this.listar();
  }
}
