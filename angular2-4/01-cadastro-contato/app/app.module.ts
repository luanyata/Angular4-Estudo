import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCompanent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatosModule } from './contatos/contato.module';


@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        ContatosModule,

    ],
    declarations: [AppCompanent],
    bootstrap: [AppCompanent]
})
export class AppModule {

}