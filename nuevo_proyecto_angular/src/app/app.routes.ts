import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CounterComponent } from './counter/counter.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: "card/:studentId",
        component: UserCardComponent,
        title: "User Card"
    },
    {
        path: "calc",
        component: CalculatorComponent
    },
    {
        path: "counter",
        loadComponent: () => import('./counter/counter.component').then(c => c.CounterComponent)
    }
    ,
    {
        path: "student",
        canActivate: [AuthGuard],
        loadChildren: () => import('./student/student.module').then(c => c.StudentModule)
    }
];
