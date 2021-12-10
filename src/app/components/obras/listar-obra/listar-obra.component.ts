import { ObrasService } from './../../../services/obras.service';
import { IObra } from './../../../model/IObra.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-obra',
  templateUrl: './listar-obra.component.html',
  styleUrls: ['./listar-obra.component.css']
})
export class ListarObraComponent implements OnInit {

  listaObras: IObra[] = [

  ];

  constructor(private obrasService: ObrasService) { }

  ngOnInit(): void {
    this.carregarObras();
  }

  carregarObras(): void {
    this.obrasService.buscarObras().subscribe(retorno => {
      this.listaObras = retorno;
    })
  };

  deletar(obra: IObra): void {
    this.obrasService.excluir(obra.id!).subscribe(() => {
      this.obrasService.exibirMensagem(
        'Sistema',
        `${obra.nome} foi excluído com sucesso!`,
        'toast-success'
      );
      this.carregarObras();
    })
  }

}
