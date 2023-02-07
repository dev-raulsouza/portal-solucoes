import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {

  frontEstatico: boolean = false;
  frontDinamico: boolean = false;
  framework: string;
  opcaoContainer: boolean = false;
  sContainer: boolean = false;
  nContainer: boolean = false;
  btnShow: boolean = false;
  tipoFront: boolean = false;
  sisInt: boolean = false;
  sisExt: boolean = false;

  constructor(private fileService: FilesService) { }

  ngOnInit(): void {
  }

  checkInterno(event: any) {
    this.tipoFront = true;
    this.sisExt = false;
    this.sisInt = true;
    this.frontEstatico = false;
    this.frontDinamico = false;
    this.btnShow = false;
  }

  checkExterno(event: any) {
    this.tipoFront = true;
    this.sisExt = true;
    this.sisInt = false;
    this.frontEstatico = false;
    this.frontDinamico = false;
    this.btnShow = false;
  }

  checkFrontEstatico(event: any) {
    this.frontEstatico = true;
    this.frontDinamico = false;
    this.btnShow = false;
  }

  checkFrontDinamico(event: any) {
    this.frontDinamico = true;
    this.frontEstatico = false;
    this.opcaoContainer = false;
    this.btnShow = false;
  }

  getFramework(event: any){
    this.framework = event.target.value;
    this.btnShow = false;
    if(this.framework != "first" && this.frontDinamico != true){
      this.opcaoContainer = true;
    } else if(this.framework !== "first" && this.frontDinamico === true){
      this.opcaoContainer = false;
      this.btnShow = true;
    }
  }

  ehContainer(event: any){
    this.sContainer = true;
    this.nContainer = false;
    this.btnStatus();
  }

  nEhContainer(event: any){
    this.sContainer = false;
    this.nContainer = true;
    this.btnStatus();
  }

  btnStatus(){
    return this.btnShow = true;
  }

  solicitaArquivo(){
    if(this.sisInt === true && this.frontEstatico === true && this.framework !== "" && this.nContainer === true){
      this.fileService.getResponseArquivo('frontend_estático_interno.drawio.xml')
    } else if(this.sisExt === true && this.frontEstatico === true && this.framework !== "" && this.nContainer === true){
      this.fileService.getResponseArquivo('frontend_estático_externo')
    } else if(this.sisExt === true && this.frontEstatico === true && this.framework !== "" && this.sContainer === true){
      this.fileService.getResponseArquivo('frontend_containerizado')
    } else if(this.sisInt === true && this.frontDinamico === true){
      this.fileService.getResponseArquivo('frontend_containerizado')
    } else if(this.sisExt === true && this.frontDinamico === true){
      this.fileService.getResponseArquivo('frontend_containerizado')
    } if(this.sisInt === true && this.frontEstatico === true && this.framework !== "" && this.sContainer === true){
      this.fileService.getResponseArquivo('frontend_containerizado')
    } 
  }

}
