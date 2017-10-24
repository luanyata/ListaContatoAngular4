import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser' //Informa q a aplicacao rodara em um browser
import { AppComponent } from './app.component';
import {ContatosModule} from './contatos/contatos.module'
import {AppRoutingModule} from "./app-routing.module"

@NgModule({
    imports: [
        BrowserModule,
        ContatosModule,
        AppRoutingModule
    ],
    declarations: [AppComponent], //Usado para declarar todos os componentes que serao usados neste modulo
    bootstrap: [AppComponent] //Usado apenas no componente root e informamos o componente que ira iniciar a aplicacao
})
export class AppModule {

}