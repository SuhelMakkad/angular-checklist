import { routers } from '@/utils/route';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  routers = routers;
}
