import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChecklistComponent } from './pages/checklist/checklist.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'checklist',
    component: ChecklistComponent,
  },
];
