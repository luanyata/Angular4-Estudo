import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { CommonModule } from '@angular/common';
import { ContatoDetalheComponent } from './detalhes/contato-detalhe.component'
import { ContatosListaComponent } from './lista/contatos-lista.component'
import { ContatoRoutingModule } from './contato-routing.module'
import { ContatoService } from './contato.service'

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    // Usado para disponivilizar para os componentes deste mesmo modulo "Protect"
    declarations: [
        ContatosListaComponent,
        ContatoDetalheComponent,
      
    ],
    // Usando para export para outros modulos externos (Public)
    exports: [ContatosListaComponent],
    providers: [
        ContatoService
    ]
})
export class ContatosModule {

}