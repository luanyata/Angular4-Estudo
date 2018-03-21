import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Http } from '@angular/http';
import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';
import { resolve } from 'url';

@Injectable()
export class ContatoService {
    private contatoUrl: string = 'app/contatos';
    
    constructor(
        private http: Http
    ) { }


    getContatos(): Promise<Contato[]> {
        return this.http.get(this.contatoUrl)
            .toPromise()
            .then(response => response.json().data as Contato[]);
    }


    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
    }

    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        }).then(() => this.getContatos());
    }


}