import {Routes} from '@angular/router';

import { HomeComponent} from '../home/home.component'; 
import { DrawdetailComponent} from '../drawdetail/drawdetail.component'
import { ContactComponent} from '../contact/contact.component'; 
import { TabledrawComponent } from '../tabledraw/tabledraw.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'drawdetail/:id', component: DrawdetailComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'tabledraw', component: TabledrawComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];