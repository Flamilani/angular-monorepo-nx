import { iTask } from "../interfaces/task.interface";

export const cTasks: iTask[] = [
  {
    id: 1,
    name: 'Criar componente de login',
    categoryId: 1,
    completed: true
  },
  {
    id: 2,
    name: 'Passeio no parque',
    categoryId: 2,
    completed: true
  },
  {
    id: 3,
    name: 'Criar componente de dashboard',
    categoryId: 1,
    completed: false
  },
  {
    id: 4,
    name: 'Fazer negócio com cliente',
    categoryId: 3,
    completed: false
  },
  {
    id: 5,
    name: 'Criar componente de formulário de contato',
    categoryId: 1,
    completed: true
  }
];
