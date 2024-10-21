import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { HomeModule } from '../home.module';
import { TasksComponent } from './tasks.component';
import { CreateComponent } from './task-create/task-create.component';

@NgModule({
  declarations: [TasksComponent, CreateComponent],
  imports: [CommonModule, TasksRoutingModule, HomeModule],
})
export class TasksModule {}
