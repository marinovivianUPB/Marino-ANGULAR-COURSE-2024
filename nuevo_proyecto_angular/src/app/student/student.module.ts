import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ScoreComponent } from './score/score.component';
import { ClassmateComponent } from './classmate/classmate.component';
import { RouterLink } from '@angular/router';
import { AverageComponent } from './average/average.component';
import { AuthService } from '../auth.service';


@NgModule({
  declarations: [ScoreComponent, ClassmateComponent, AverageComponent],
  imports: [
    CommonModule,
    StudentRoutingModule, RouterLink
  ]
})
export class StudentModule { }
