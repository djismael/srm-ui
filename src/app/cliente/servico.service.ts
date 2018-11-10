import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServicoService {

  url = 'http://localhost:8080/cliente';

  constructor(private http: HttpClient) {
  }

  listarTodos(): Promise<any> {
    console.log('***********Caiu no servico***********');
    return this.http.get<any>(this.url)
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
