import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaestroComponent } from './components/maestro/maestro.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { AddeditComponent } from './components/addedit/addedit.component';

const app_routes: Routes = [
    // { path: 'home', component: AppComponent, pathMatch: 'full'},
    { path: 'maestro', component: MaestroComponent },
    { path: 'addedit', component: AddeditComponent },
    { path: 'ficha', component: DetalleComponent },
    // { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }


