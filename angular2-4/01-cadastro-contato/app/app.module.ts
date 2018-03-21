import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCompanent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatosModule } from './contatos/contato.module';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        ContatosModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)

    ],
    declarations: [AppCompanent],
    bootstrap: [AppCompanent]
})
export class AppModule {

}