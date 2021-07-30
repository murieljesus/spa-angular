import {Routes} from '@angular/router';

import { HomeComponent} from '../home/home.component'; 
import { DrawdetailComponent} from '../drawdetail/drawdetail.component'
import { AboutComponent} from '../about/about.component'; 

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'drawdetail', component: DrawdetailComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];