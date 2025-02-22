import { ChecklistService } from '@/service/checklist.service';
import { CheckList, Todo } from '@/service/types';
import { routers } from '@/utils/route';
import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-checklist',
  imports: [RouterLink],
  templateUrl: './checklist.component.html',
})
export class ChecklistComponent {
  route = inject(ActivatedRoute);
  checklistService = inject(ChecklistService);

  checklist = signal<CheckList | null>(null);
  todos = signal<Todo[] | null>(null);

  routers = routers;

  constructor() {
    const checklistId = this.route.snapshot.params['checklistId'] as string;

    effect(() => {
      this.checklist.set(this.checklistService.getChecklistById(checklistId));
    });
    effect(() => {
      this.todos.set(this.checklistService.getTodosByChecklistId(checklistId));
    });
  }

  toggleTodoState(todoId: string, newState: boolean) {
    this.checklistService.updateTodoState(todoId, newState);
  }
}
