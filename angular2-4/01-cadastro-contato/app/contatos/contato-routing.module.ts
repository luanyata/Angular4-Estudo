import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ContatosListaComponent } from './lista/contatos-lista.component';
import { ContatoDetalheComponent } from './detalhes/contato-detalhe.component';


const CONTATOROUTES: Routes = [
    {

        path: 'contato', //Rota
        component: ContatosListaComponent //Componente a ser renderizado ao entra nesta rota
    },
    {
        path: 'contato/save', //Rota
        component: ContatoDetalheComponent //Componente a ser renderizado ao entra nesta rota
    },
    {
        path: 'contato/save/:id',
        component: ContatoDetalheComponent
    }
]

@NgModule({
    imports: [
        // forChild usada quando a rota 'e filha, a rota pai fica no app-routing, a rota root da aplicacao
        RouterModule.forChild(CONTATOROUTES)
    ],
    exports: [RouterModule]
})

export class ContatoRoutingModule {

}