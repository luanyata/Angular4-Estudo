import { Component, OnInit } from '@angular/core';

import { Contato } from '../contato.model';
import { ContatoService } from '../contato.service'


@Component({
    moduleId: module.id, //Obrigatorio ao usar um templateUrl ou usar um styleUrl externo
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})
export class ContatosListaComponent implements OnInit {

    contatos: Contato[];

    constructor(private contatoService: ContatoService) { }


    // Metodo composto no ciclo de vida do component. Equivale ao action no angularJS
    ngOnInit(): void {
        this.contatoService.getContatos()
            .then((contatos: Contato[]) => this.contatos = contatos)
            .catch(error => console.log(error));
    }

}