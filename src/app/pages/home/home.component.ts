import { Component, inject, OnInit } from '@angular/core';
import { ChecklistService } from '@/service/checklist.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  checkListService = inject(ChecklistService);

  ngOnInit() {
    this.checkListService.loadInitData();
  }

  handleCheckListDelete(id: string) {
    this.checkListService.removeChecklist(id);
  }
}
