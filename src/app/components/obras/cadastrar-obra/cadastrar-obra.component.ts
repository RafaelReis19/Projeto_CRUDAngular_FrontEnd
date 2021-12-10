import { Router } from '@angular/router';
import { ObrasService } from './../../../services/obras.service';
import { IObra } from './../../../model/IObra.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-obra',
  templateUrl: './cadastrar-obra.component.html',
  styleUrls: ['./cadastrar-obra.component.css']
})
export class CadastrarObraComponent implements OnInit {
  obra: IObra = {
    nome: '',
    tipo: '',
    validade: new Date(),
    precoProduto: 0

  };

  constructor(private obrasService: ObrasService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarObra(): void {
    this.obrasService.cadastrar(this.obra).subscribe(retorno => {
      this.obra = retorno;
      this.obrasService.exibirMensagem(
        'Sistema',
        `${this.obra.nome} foi cadastrada com sucesso! Id: ${this.obra.id}`,
        'toast-success'
      );

      this.router.navigate(['/obras']);
    });
  }

}
