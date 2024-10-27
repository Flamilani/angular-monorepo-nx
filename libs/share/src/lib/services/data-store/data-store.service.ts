import { Injectable } from '@angular/core';
import { cCategocies } from '../../constants/category.constant';
import { of } from 'rxjs';
import { ICategory } from '../../interfaces/category.interface';
import { iTask } from '../../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  categories = cCategocies;
  tasks = [];

  listCategories() {
    return of(this.categories);
  }

  getTasks() {
    return of(this.tasks);
  }

  createTask(taskName: string, categoryId: ICategory) {
    const newTask: iTask = {
      id: this.tasks.length + 1,
      name: taskName,
      categoryId: categoryId,
      completed: false
    };

    this.tasks.push(newTask);
  }
}
