import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TreeTableModule } from 'primeng/treetable';

@NgModule({
  imports: [BrowserModule, CommonModule, TreeTableModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
