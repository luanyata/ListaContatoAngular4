import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContatosListaComponent } from './contatos-lista.component';
import { ContatoDetalheComponent } from './contato-detalhe.component'

const contatoRoutes: Routes = [
    {
        //rota 1
        path: 'contato',//nome da rota
        component: ContatosListaComponent //Componente a ser renderizado 
    },
    {
        //rota 2
        path: 'contato/save',
        component: ContatoDetalheComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(contatoRoutes) // forChild pois e uma rota filha di app-module que recebe o forRoot
    ]
})
export class ContatoRoutingModule {

}