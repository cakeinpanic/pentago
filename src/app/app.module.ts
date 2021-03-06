import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MainFieldComponent } from './main-field/main-field.component';
import { SmallFieldComponent } from './small-field/small-field.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MainFieldComponent,
    SmallFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
