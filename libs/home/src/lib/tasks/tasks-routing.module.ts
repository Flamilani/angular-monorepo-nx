import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TaskCreateComponent } from './task-create/task-create.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent
  },
  {
    path: 'create-task',
    component: TaskCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
