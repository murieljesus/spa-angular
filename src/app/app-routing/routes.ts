import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent} from '../home/home.component'; 
import { DrawdetailComponent} from '../drawdetail/drawdetail.component'
import { ContactComponent} from '../contact/contact.component'; 
import { TabledrawComponent } from '../tabledraw/tabledraw.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent, data:{title: 'Home'} },
    { path: 'drawdetail/:id', component: DrawdetailComponent,data:{title: 'Image'} },
    { path: 'contact', component: ContactComponent,data:{title: 'Contact'} },
    { path: 'tabledraw', component: TabledrawComponent,data:{title: 'Gallery'} },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }