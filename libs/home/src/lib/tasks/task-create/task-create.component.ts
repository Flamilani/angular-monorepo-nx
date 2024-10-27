import { DataStoreService, ICategory } from '@angular-monorepo-nx/share';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-create',
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss',
})
export class CreateComponent implements OnInit {

  categories: ICategory[] = [];

  constructor(private readonly dataStoreService: DataStoreService) {}

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories() {
    this.dataStoreService.listCategories().subscribe((categories: ICategory[]) => {
      this.categories = categories;
    });
  }


}
