import { ActivatedRoute, Router } from '@angular/router';
import { ObrasService } from './../../../services/obras.service';
import { IObra } from './../../../model/IObra.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar-obra',
  templateUrl: './atualizar-obra.component.html',
  styleUrls: ['./atualizar-obra.component.css']
})
export class AtualizarObraComponent implements OnInit {

  obra: IObra = {
    nome: '',
    tipo: '',
    validade: new Date(),
    precoProduto: 0

  };

  constructor(private obrasService: ObrasService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.obrasService.buscarPorId(id).subscribe(retorno => {
      this.obra = retorno;
    });
  }

  salvarObra(): void{
    this.obrasService.atualizar(this.obra).subscribe(retorno => {
      this.obra = retorno;
      this.obrasService.exibirMensagem(
        'Sistema',
        `${this.obra.nome} foi atualizado com sucesso! Id: ${this.obra.id}`,
        'toast-success'
      );

      this.router.navigate(['/obras']);
    });
  }

}
