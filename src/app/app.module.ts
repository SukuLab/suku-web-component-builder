import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SukuWebcomponentsModule } from 'projects/suku-webcomponents/src/public_api';
import { MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, AppRoutingModule, SukuWebcomponentsModule, MatSelectModule, BrowserAnimationsModule ],
	schemas: [ NO_ERRORS_SCHEMA ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
