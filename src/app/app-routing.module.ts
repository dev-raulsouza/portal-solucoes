import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinicoesComponent } from './components/definicoes/definicoes.component';
import { HomeComponent } from './components/home/home.component';
import { ListarSolucoesComponent } from './components/listar-solucoes/listar-solucoes.component';
import { SolicitarSolucaoComponent } from './components/solicitar-solucao/solicitar-solucao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'solicitar-solucao',
    component: SolicitarSolucaoComponent
  },
  {
    path: 'listar-solucao',
    component: ListarSolucoesComponent
  },
  {
    path: 'definicoes',
    component: DefinicoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
