import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {

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

}
