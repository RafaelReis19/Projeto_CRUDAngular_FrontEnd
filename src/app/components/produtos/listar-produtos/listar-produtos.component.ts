import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
//import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  //array dados, data
  listaProdutos: IProduto[] = [

  ];

  constructor(private produtosService: ProdutosService) {

  }

  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos(): void {
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listaProdutos = retorno;
    })
  };

  deletar(produto: IProduto): void {
    //após um campo opcional, é necessário o uso de um ponto de exclamação.
    //e o campo id é um campo opcional, pois ele pode ser nulo (?).
    this.produtosService.excluir(produto.id!).subscribe(() => {
      this.produtosService.exibirMensagem(
        'Sistema',
        `${produto.nome} foi excluído com sucesso!`,
        'toast-success'
      );
      this.carregarProdutos();
    })
  }

}
