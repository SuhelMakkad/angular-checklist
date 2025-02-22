import { ChecklistService } from '@/service/checklist.service';
import { CheckList } from '@/service/types';
import { routers } from '@/utils/route';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-create',
  imports: [FormsModule],
  templateUrl: './todo-create.component.html',
})
export class TodoCreateComponent {
  router = inject(Router);
  activeRouter = inject(ActivatedRoute);
  checklistService = inject(ChecklistService);

  checklist = signal<CheckList | null>(null);
  nameModel = signal('');

  constructor() {
    const checklistId = this.activeRouter.snapshot.params[
      'checklistId'
    ] as string;

    this.checklist.set(this.checklistService.getChecklistById(checklistId));
  }

  handleSubmit() {
    const todoTitle = this.nameModel();
    const checklist = this.checklist();
    if (!todoTitle || !checklist) return;

    this.checklistService.addTodo(checklist.id, todoTitle);
    this.router.navigate(routers.checklist(checklist.id), {
      replaceUrl: true,
    });
  }
}
