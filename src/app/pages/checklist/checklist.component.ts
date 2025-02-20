import { ChecklistService } from '@/service/checklist.service';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checklist',
  imports: [FormsModule],
  templateUrl: './checklist.component.html',
})
export class ChecklistComponent {
  nameModel = signal('');
  checkListService = inject(ChecklistService);
  router = inject(Router);

  handleFormSubmit() {
    const name = this.nameModel();
    if (!name) return;

    this.checkListService.addChecklist(name);
    this.router.navigate(['/']);
  }
}
