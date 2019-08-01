import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, enableProdMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
	SukuWebcomponentsService, SukuFormFooterModule, SukuWebcomponentsModule
} from 'projects/suku-webcomponents/src/public_api';
import { TestCompComponent } from './test-comp/test-comp.component';
// import { SukuButtonsModule, SukuWebco../../projects/suku-webcomponents/src/lib/suku-user-input/suku-user-input.component;
enableProdMode();
@NgModule({
	declarations: [AppComponent, TestCompComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,
		FormsModule, ReactiveFormsModule, SukuFormFooterModule, SukuWebcomponentsModule
	],
	schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private sukuService: SukuWebcomponentsService) {
		this.sukuService.setSukuTheme();
	}
}
