import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //quando a variavel é public, não precisa declarar.
  public nomeProduto: string = "Curso de Angular";
  //template string, melhor do que concatenação.
  anuncio: string = `O ${this.nomeProduto} está em promoção!`;

  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade: string = '2021-12-31';

  listarProdutos: any = [
    {nome: 'Curso de Angular Home', precoProduto: 500.00, validade: '2021-12-31', id: 1},
    {nome: 'Curso de Python Home', precoProduto: 350.00, validade: '2021-12-31', id: 2, promocao: true},
    {id: 3, nome: 'Curso de Ionic Home', precoProduto: 450.50, validade: '2021-12-31'},
    {id: 4, nome: 'Curso de Ionic avançado Home', precoProduto: 490.00, validade: '2022-12-31'},
    {nome: 'Curso de C# Home', id: 5, precoProduto: 485.00, validade: '2021-12-31'}
  ];

  constructor() {
    //variaveis de string com concatenação.
    //this.anuncio = 'O ' + this.nomeProduto + ' está em promoção!';

    console.log('Nome do produto', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('Id: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);

    //o let é mais utilizado, por conta de não ser global.
    /*let idade = 20
    function imprimeIdade(){
      for(let idade = 30; idade <= 40; idade++){
        console.log('Minha idade é: ', idade);
      }
      console.log('Idade: ', idade);
    }
    imprimeIdade();*/
   }

  ngOnInit(): void {
  }

}
