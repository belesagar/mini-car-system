import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './manufacturer/add/add.component';
import { HeaderComponent } from './template/header/header.component';
import { MiddleComponent } from './template/middle/middle.component';
import { FooterComponent } from './template/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoryComponent } from './inventory/inventory.component';
import { AddModelComponent } from './manufacturer/add-model/add-model.component';
import { ConstantComponent } from './constant/constant.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HeaderComponent,
    MiddleComponent,
    FooterComponent,
    InventoryComponent,
    AddModelComponent,
    ConstantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule, 
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
