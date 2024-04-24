import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DiscoverComponent } from './discover/discover.component';
import { JoinComponent } from './join/join.component';
import { FootweComponent } from './footwe/footwe.component';
import { HomeComponent } from './home/home.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

export const routes: Routes = [
    {path: 'header',
     component: HeaderComponent
    },
    {
        path:'',
        component: HomeComponent,
    },
    {path:'discover',
        component: DiscoverComponent
    },
    {
        path:'join',
        component: JoinComponent
    },
    {
        path:'footer',
        component:FootweComponent
    },
    {
        path:'**',
        component:NotfoundpageComponent
    },
    
];