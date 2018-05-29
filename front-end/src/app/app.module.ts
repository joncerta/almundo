import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { routing, appRoutingProviders } from "./app.routing";

import { AppComponent } from './app.component';
import { HotelsComponent } from './component/hotels/hotels.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [HotelsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
