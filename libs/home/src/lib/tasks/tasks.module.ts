import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { HomeModule } from '../home.module';
import { TasksComponent } from './tasks.component';

import { ShareModule } from '@angular-monorepo-nx/share';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, TasksRoutingModule, HomeModule, ShareModule],
})
export class TasksModule {}
