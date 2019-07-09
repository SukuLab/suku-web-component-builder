import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, enableProdMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule, MatSlideToggle, MatButtonToggleModule, MatSlideToggleBase } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
	SukuModalModule, SukuAchSettingModule,
	SukuAddIconWidgetModule, SukuBidTagModule, SukuWebcomponentsService
} from 'projects/suku-webcomponents/src/public_api';
// import {
// 	SukuModalModule, SukuAchSettingModule,
// 	SukuAddIconWidgetModule, SukuBidTagModule, SukuWebcomponentsService
// } from 'suku-webcomponents';
enableProdMode();
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, SukuAchSettingModule, SukuAddIconWidgetModule,
		SukuModalModule, BrowserAnimationsModule, SukuBidTagModule,
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
