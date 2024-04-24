import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FootweComponent } from './footwe/footwe.component';
import { DiscoverComponent } from './discover/discover.component';
import { JoinComponent } from './join/join.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FootweComponent, DiscoverComponent,JoinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'soundwave';
}
