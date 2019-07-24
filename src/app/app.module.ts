import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule, MatSlideToggle, MatButtonToggleModule, MatSlideToggleBase } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { SukuWebcomponentsModule, SukuWebcomponentsService } from 'projects/suku-webcomponents/src/public_api';
import { SukuWebcomponentsModule, SukuWebcomponentsService } from 'suku-webcomponents';
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, SukuWebcomponentsModule, BrowserAnimationsModule,
		MatSelectModule, FormsModule, ReactiveFormsModule
	],
	schemas: [NO_ERRORS_SCHEMA],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private sukuService: SukuWebcomponentsService) {
		this.sukuService.setSukuTheme();
	}
}
