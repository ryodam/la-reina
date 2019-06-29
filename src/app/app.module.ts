import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MateriaPrimaComponent } from './components/materia-prima/materia-prima.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const appRoutes: Routes = [
    {
        path: 'materia-prima',
        component: MateriaPrimaComponent
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        MateriaPrimaComponent,
        UserLoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MyMaterialModule,
        FlexLayoutModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
