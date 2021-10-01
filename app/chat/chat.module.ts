import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ChatComponent } from './chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule, // For ng-bootstrap
  ],
  declarations: [ChatComponent],
  bootstrap: [ChatComponent],
})
export class AppModule {}
