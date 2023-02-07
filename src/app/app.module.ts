import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SolicitarSolucaoComponent } from './components/solicitar-solucao/solicitar-solucao.component';
import { FrontendComponent } from './components/frontend/frontend.component';
import { BackendComponent } from './components/backend/backend.component';
import { DadosComponent } from './components/dados/dados.component';

import * as http from '@angular/common/http';
import { ListarSolucoesComponent } from './components/listar-solucoes/listar-solucoes.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DefinicoesComponent } from './components/definicoes/definicoes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolicitarSolucaoComponent,
    FrontendComponent,
    BackendComponent,
    DadosComponent,
    ListarSolucoesComponent,
    SearchFilterPipe,
    DefinicoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    http.HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
