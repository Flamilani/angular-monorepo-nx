import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { HomeModule } from '../home.module';
import { TasksComponent } from './tasks.component';

import { ShareModule } from '@angular-monorepo-nx/share';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskCreateComponent } from './task-create/task-create.component';

@NgModule({
  declarations: [TasksComponent, TaskCreateComponent],
  imports: [CommonModule, TasksRoutingModule, FormsModule, ReactiveFormsModule, HomeModule, ShareModule]
})
export class TasksModule {}
