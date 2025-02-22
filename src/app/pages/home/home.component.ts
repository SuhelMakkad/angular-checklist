import { Component, inject } from '@angular/core';
import { ChecklistService } from '@/service/checklist.service';
import { RouterLink } from '@angular/router';
import { routers } from '@/utils/route';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  routers = routers;
  checkListService = inject(ChecklistService);

  handleCheckListDelete(id: string) {
    this.checkListService.removeChecklist(id);
  }
}
