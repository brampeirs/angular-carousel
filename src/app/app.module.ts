import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { CarouselComponent } from "./carousel/carousel.component";

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  declarations: [AppComponent, CarouselComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
