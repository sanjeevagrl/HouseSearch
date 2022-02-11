import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseSearchComponent } from './house-search/house-search.component';
import { FilterPropertyPipe } from './pipe/filter-property.pipe';

@NgModule({
  declarations: [AppComponent, HouseSearchComponent, FilterPropertyPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
