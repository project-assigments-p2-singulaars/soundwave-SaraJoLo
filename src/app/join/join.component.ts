import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FootweComponent } from '../footwe/footwe.component';

@Component({
  selector: 'app-join',
  standalone:true,
  imports:[RouterLink,RouterLinkActive, FootweComponent],
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent {
}