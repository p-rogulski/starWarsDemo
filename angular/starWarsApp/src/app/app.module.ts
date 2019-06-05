import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {HeroComponent} from "./components/heroes/hero/hero.component";
import {HeroesIndexComponent} from "./components/heroes/heroes-index.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesIndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
