import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SystemDashboardComponent } from './system-dashboard/system-dashboard.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SystemDashboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
