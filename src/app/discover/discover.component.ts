import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl:'./discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent {
}