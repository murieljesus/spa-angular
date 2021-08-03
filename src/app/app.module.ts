//Default
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';

//Components 
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { DrawdetailComponent } from './drawdetail/drawdetail.component';
import { TabledrawComponent } from './tabledraw/tabledraw.component';
import { AboutComponent } from './about/about.component';
import {FlexLayoutModule} from '@angular/flex-layout';
//Services
import { DetailService } from './services/detail.service';
//Ngx
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { PaginatePipe } from './pipes/paginate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    DrawdetailComponent,
    AboutComponent,
    PaginatePipe,
    TabledrawComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    Ng2PageScrollModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
