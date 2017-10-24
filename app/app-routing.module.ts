import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    {
        path: "", //Caminho da rota do app-component
        redirectTo: "/contato", //Para que roda deve ser redirecionada ao acessar o path
        pathMatch: "full" //
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes), //forRoot pois estamos a rota root ;P
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {

}