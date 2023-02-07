import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-solicitar-solucao',
  templateUrl: './solicitar-solucao.component.html',
  styleUrls: ['./solicitar-solucao.component.scss']
})


export class SolicitarSolucaoComponent {

  
  solicitanteValido: boolean = true;
  frontValue: boolean = false;
  backValue: boolean = false;
  dataValue: boolean = false;
  frontEstatico: boolean = false;
  frontDinamico: boolean = false;
  btnPronto: boolean = true;
  public apiURL : string;
  
  constructor(private http : HttpClient, private fileService: FilesService){
    this.apiURL == 'https://xywdvfx12b.execute-api.ca-central-1.amazonaws.com/abc/lambdamanager';
  }

  infoSolicitante(area: string, projeto: string, matricula: string, email: string) {

    if (area != null && projeto != null && matricula != null && email != null) {
      const infoSolic = {
        "area": area,
        "projeto": projeto,
        "matricula_solicitante": matricula,
        "email_solicitante": email
      }
      this.solicitanteValido = true;
    } else {
      this.solicitanteValido = false;
    }

  }

  checkFrontValue(event: any) {
    if (event.target.checked) {
      this.frontValue = true;
    } else {
      this.frontValue = false;
    }
  }

  checkBackValue(event: any) {
    if (event.target.checked) {
      this.backValue = true;
    } else {
      this.backValue = false;
    }
  }

  checkDataValue(event: any) {
    if (event.target.checked) {
      this.dataValue = true;
    } else {
      this.dataValue = false;
    }
  }

  painelFront(){
    this.frontValue = true;
    this.backValue = false;
    this.dataValue = false;
  }

  painelBack(){
    this.frontValue = false;
    this.backValue = true;
    this.dataValue = false;
  }

  painelData(){
    this.frontValue = false;
    this.backValue = false;
    this.dataValue = true;
  }


}
