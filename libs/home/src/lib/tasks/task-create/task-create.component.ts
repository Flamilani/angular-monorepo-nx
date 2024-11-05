import { cCategocies, DataStoreService, ICategory, iTask } from '@angular-monorepo-nx/share';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-create-task',
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss',
})
export class TaskCreateComponent implements OnInit {
  tasks: iTask[] = [];
  categories: ICategory[] = cCategocies;
  taskForm!: FormGroup;

  constructor(private readonly dataStoreService: DataStoreService) {
    this.taskForm = new FormGroup({
      name: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.listCategories();
    this.loadTasks();
  }

  listCategories() {
    this.dataStoreService.listCategories().subscribe((categories: ICategory[]) => {
      this.categories = categories;
    });
  }

  getCategoryName(categoryId: number): string | undefined {
    return this.categories.find(category => category.id === categoryId)?.name;
  }

  addTask() {
      const name = this.taskForm.get('name')?.value;
      const categoryId = Number(this.taskForm.get('categoryId')?.value);

      if (name === null || name === undefined) {
        console.error('Nome da tarefa é obrigatório');
        return;
      }
      const task: iTask = {
        id: this.tasks.length + 1,
        name,
        categoryId,
        completed: false
      };
      this.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.taskForm.reset();
  }

  loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  clearTasks() {
    this.tasks = [];
    localStorage.removeItem('tasks');
  }
}
