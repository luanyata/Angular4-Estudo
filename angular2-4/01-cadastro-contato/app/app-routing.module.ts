import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{
    path: '',
    redirectTo: '/contato',
    pathMatch: 'full'
}]

@NgModule({
    imports: [
        // forRoot por se tratar da rota root :P
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}