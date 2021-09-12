import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuspenseDirective } from './suspense.directive';
import { SuspenseConditionalDirective } from './suspense-conditional.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SuspenseDirective, SuspenseConditionalDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
