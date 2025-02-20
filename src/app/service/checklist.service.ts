import { effect, inject, Injectable, signal } from '@angular/core';
import { nanoid } from 'nanoid';
import { CheckList, Todo } from './types';
import { StorageService } from './storage.service';

const TODO_STORAGE_KEY = 'checklist:app:todo';
const CHECKLIST_STORAGE_KEY = 'checklist:app:checklist';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  storageService = inject(StorageService);

  todos = signal<Todo[]>([]);
  checklists = signal<CheckList[]>([
    {
      id: 'a',
      name: 'test1',
    },
    {
      id: 'b',
      name: 'test2',
    },
    {
      id: 'c',
      name: 'test3',
    },
  ]);

  constructor() {
    effect(() => {
      this.storageService.set(TODO_STORAGE_KEY, this.todos());
    });

    effect(() => {
      this.storageService.set(CHECKLIST_STORAGE_KEY, this.checklists());
    });
  }

  addChecklist(name: string) {
    this.checklists.update((prev) => [...prev, { id: nanoid(), name }]);
  }

  removeChecklist(id: string) {
    this.checklists.update((prev) => prev.filter((list) => list.id !== id));
  }

  addTodo(checkListId: string, title: string) {
    this.todos.update((prev) => [
      ...prev,
      {
        checkListId,
        title,
        id: nanoid(),
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  }

  removeTodo(id: string) {
    this.todos.update((prev) => prev.filter((list) => list.id !== id));
  }
}
