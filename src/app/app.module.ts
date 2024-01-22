import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RowComponent } from './components/row/row.component';
import { RowChildComponent } from './components/row-child/row-child.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    RowChildComponent,
    FilterFormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
