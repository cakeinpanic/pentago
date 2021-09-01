import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LetModule } from '@rx-angular/template';
gi
import { RxState } from '@rx-angular/state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MainFieldComponent } from './main-field/main-field.component';
import { SmallFieldComponent } from './small-field/small-field.component';
import { GLOBAL_RX_STATE, GlobalState } from './state/state';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MainFieldComponent,
    SmallFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LetModule,
  ],
  providers: [
    {
      provide: GLOBAL_RX_STATE, useFactory: () => new RxState<GlobalState>()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
