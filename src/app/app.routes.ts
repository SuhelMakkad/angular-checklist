import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChecklistCreateComponent } from './pages/checklist-create/checklist-create.component';
import { ChecklistComponent } from './pages/checklist/checklist.component';
import { TodoCreateComponent } from './pages/todo-create/todo-create.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'checklist',
    pathMatch: 'full',
    component: ChecklistCreateComponent,
  },
  {
    path: 'checklist/:checklistId',
    pathMatch: 'full',
    component: ChecklistComponent,
  },
  {
    path: 'checklist/:checklistId/todo',
    pathMatch: 'full',
    component: TodoCreateComponent,
  },
];
