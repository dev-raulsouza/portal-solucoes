import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http : HttpClient) { }

  getArquivo(resultado: string, nome_arquivo: string){
    const src = `data:text/xml;base64,${resultado}`;
    const link = document.createElement("a")
    link.href = src
    link.download = `${nome_arquivo}.xml`
    link.click()
    link.remove()
  }

  getResponseArquivo(nome_arquivo: string){
    return this.http.post<any>('https://xywdvfx12b.execute-api.ca-central-1.amazonaws.com/abc/lambdamanager', { "nome_arquivo": nome_arquivo }).subscribe(resultado => {
      this.getArquivo(resultado.toString(), nome_arquivo);
    })
  }
}
