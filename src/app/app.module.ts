import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseSearchComponent } from './house-search/house-search.component';

@NgModule({
  declarations: [AppComponent, HouseSearchComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [HouseSearchComponent],
})
export class AppModule {}
