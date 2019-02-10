import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AppRoutingModule } from './app.route.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { StoreModule, ActionReducerMap, ActionReducer, MetaReducer  } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducer } from './store/app.reducer';
import { environment } from '../environments/environment'; 
import { localStorageSync } from 'ngrx-store-localstorage';
import { HttpClientModule } from '@angular/common/http';
import { LoginEffect } from './core/store/login/login.effect';
import { EffectsModule } from '@ngrx/effects';
import { DevExtremeModule } from "devextreme-angular";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['login'] , rehydrate : true})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    CoreModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    DevExtremeModule,
    StoreModule.forRoot(AppReducer ,  {metaReducers}),
    EffectsModule.forRoot([LoginEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
