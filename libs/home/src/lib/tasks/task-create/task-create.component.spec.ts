import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateComponent } from './task-create.component';
import { DataStoreService, ICategory } from '@angular-monorepo-nx/share';
import { of } from 'rxjs';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let service: DataStoreService;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DataStoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list categories', () => {
    const categories: ICategory[] = [
      { id: 1, name: 'Categoria 1' },
      { id: 2, name: 'Categoria 2' }
    ];

    service['listCategories'] = jest.fn().mockReturnValue(of(categories));

    service.listCategories().subscribe((result: ICategory[]) => {
      expect(result).toEqual(categories);
    });
  });
});
