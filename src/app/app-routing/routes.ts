import {Routes} from '@angular/router';

import { HomeComponent} from '../home/home.component'; 
import { DrawdetailComponent} from '../drawdetail/drawdetail.component'
import { AboutComponent} from '../about/about.component'; 
import { TabledrawComponent } from '../tabledraw/tabledraw.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'drawdetail/:id', component: DrawdetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'tabledraw', component: TabledrawComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];