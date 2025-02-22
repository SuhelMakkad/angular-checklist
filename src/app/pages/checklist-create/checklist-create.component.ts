import { ChecklistService } from '@/service/checklist.service';
import { routers } from '@/utils/route';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checklist-create',
  imports: [FormsModule],
  templateUrl: './checklist-create.component.html',
})
export class ChecklistCreateComponent {
  checkListService = inject(ChecklistService);
  router = inject(Router);

  nameModel = signal('');

  handleFormSubmit() {
    const name = this.nameModel();
    if (!name) return;

    this.checkListService.addChecklist(name);
    this.router.navigate(routers.home);
  }
}
