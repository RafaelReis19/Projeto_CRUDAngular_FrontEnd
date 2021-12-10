import { IObra } from './../model/IObra.model';
//import { IProduto } from './../model/IProduto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ObrasService {

  private URL: string = 'http://localhost:3000/obras';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  //parte das obras Artistícas
  buscarObras() : Observable<IObra[]> {
    return this.http.get<IObra[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  buscarPorId(id: number) : Observable<IObra> {
    return this.http.get<IObra>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  cadastrar(produto: IObra) : Observable<IObra> {
    return this.http.post<IObra>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  atualizar(obra: IObra) : Observable<IObra> {
    return this.http.put<IObra>(`${this.URL}/${obra.id}`,obra).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  excluir(id: number) : Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  exibirErro(e: any) : Observable<any> {
    this.exibirMensagem('Erro!', 'Não foi possível realizar a operação.', 'toast-error')
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string) : void {
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo)
  }

}
