import { cCategocies, DataStoreService, ICategory, iTask } from '@angular-monorepo-nx/share';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {

  tasks!: iTask[];
  categories: ICategory[] = cCategocies;

  constructor(private dataStore: DataStoreService) {
    this.loadTasks();
  }

  ngOnInit(): void {
    this.dataStore.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

  getCategoryName(categoryId: number): string | undefined {
    return this.categories.find(category => category.id === categoryId)?.name;
  }

  loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
}
