import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cliente} from '../core/model/Cliente';

@Injectable()
export class ServicoService {

  url = 'http://localhost:8080/cliente';

  constructor(private http: HttpClient) {
  }

  listarTodos(): Promise<any> {
    return this.http.get<any>(this.url)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  salvar(cliente: Cliente): Promise<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.url, JSON.stringify(cliente), {headers: headers})
      .toPromise()
      .then(response => response);
  }
}
