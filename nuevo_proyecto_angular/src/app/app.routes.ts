import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MainpageComponent } from './mainpage/mainpage.component';

export const routes: Routes = [
    {
        path:'',
        component: MainpageComponent,
        title: "MainPage"
    }
];
