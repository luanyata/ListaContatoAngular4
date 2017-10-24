import { Component } from '@angular/core'

//<router-outlet> vem do RouterModule importado do app-routing.module tem a mesma funcao no Ui-View do Ui-router
@Component({
    selector: 'my-app',
    template: `
    <h1>My first Angular 2 APP</h1>

   <router-outlet></router-outlet>
    
    `})
export class AppComponent {

}