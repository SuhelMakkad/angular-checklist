import { Component, inject } from '@angular/core';
import { ChecklistService } from '@/service/checklist.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  checkListService = inject(ChecklistService);
}
