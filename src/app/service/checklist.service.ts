import { effect, inject, Injectable, signal } from '@angular/core';
import { customAlphabet } from 'nanoid';
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
  checklists = signal<CheckList[]>([]);

  constructor() {
    effect(() => {
      const items = this.todos();
      if (items.length) {
        this.storageService.set(TODO_STORAGE_KEY, items);
      }
    });

    effect(() => {
      const items = this.checklists();
      if (items.length) {
        this.storageService.set(CHECKLIST_STORAGE_KEY, items);
      }
    });
  }

  loadInitData() {
    const oldTodos = this.storageService.get<Todo[]>(TODO_STORAGE_KEY);
    this.todos.set(oldTodos || []);

    const oldCheckList = this.storageService.get<CheckList[]>(
      CHECKLIST_STORAGE_KEY
    );
    this.checklists.set(oldCheckList || []);
  }

  getUuid() {
    const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890', 10);
    return nanoid();
  }

  addChecklist(name: string) {
    this.checklists.update((prev) => [
      ...prev,
      { id: this.getUuid(), name, createdAt: new Date().toISOString() },
    ]);
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
        id: this.getUuid(),
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  }

  removeTodo(id: string) {
    this.todos.update((prev) => prev.filter((list) => list.id !== id));
  }
}
