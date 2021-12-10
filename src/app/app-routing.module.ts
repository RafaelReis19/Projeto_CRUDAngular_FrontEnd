import { AtualizarObraComponent } from './components/obras/atualizar-obra/atualizar-obra.component';
import { CadastrarObraComponent } from './components/obras/cadastrar-obra/cadastrar-obra.component';
import { ListarObraComponent } from './components/obras/listar-obra/listar-obra.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListarProdutosComponent},
  {path:'produtos/cadastrar', component:CadastrarProdutoComponent},
  {path:'produtos/atualizar/:id', component:AtualizarProdutoComponent},
  {path:'obras', component:ListarObraComponent},
  {path:'obras/cadastrar', component:CadastrarObraComponent},
  {path:'obras/atualizar/:id', component:AtualizarObraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
