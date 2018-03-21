import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato.model';


@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html',

})
export class ContatoDetalheComponent implements OnInit {

    contato: Contato;
    private isNew: boolean = true;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location,
    ) {

    }
    ngOnInit(): void {
        console.log("On init");
        // Pegando parametro da rota
        this.contato = new Contato(0, "", "", "");
        this.route.params.forEach((params: Params) => {
            // O uso do + converte a string em number
            let id: number = +params["id"];

            if (id) {
                this.isNew = false;
                this.contatoService.getContato(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                    });
            }

            console.log(id);
        })
    }

    onSubmit(): void {

        if (this.isNew) {
            console.log("Cadastrar Usuario");
        } else {
            console.log("Alterar Contato");

        }
    }
}