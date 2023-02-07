import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-listar-solucoes',
  templateUrl: './listar-solucoes.component.html',
  styleUrls: ['./listar-solucoes.component.scss']
})


export class ListarSolucoesComponent implements OnInit {

  re: any;
  searchText:any;
  pag : number = 1 ;
  contador : number = 10;
  p : any;

  constructor(private http: HttpClient, private fileService: FilesService) { }

  ngOnInit(): void {
    this.listar()
  }

  teste(arquivo: any) {
    this.fileService.getResponseArquivo(arquivo.toString());
  }

  listar() {
    this.http.get('https://xywdvfx12b.execute-api.ca-central-1.amazonaws.com/abc/listfiles')
      .subscribe(resultado => {
        this.re = Object.entries(resultado);
      }, err => {
        console.log(err);
      }
      );
  }
}
