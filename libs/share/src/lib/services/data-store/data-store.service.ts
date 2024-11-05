import { Injectable } from '@angular/core';
import { cCategocies } from '../../constants/category.constant';
import { of } from 'rxjs';
import { ICategory } from '../../interfaces/category.interface';
import { iTask } from '../../interfaces/task.interface';
import { cTasks } from '../../constants/tasks.constant';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  categories = cCategocies;
  tasks = cTasks;

  listCategories() {
    return of(this.categories);
  }

   getTasks() {
    return of(this.tasks);
   }

}
