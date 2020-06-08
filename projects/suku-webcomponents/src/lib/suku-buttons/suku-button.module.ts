import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuInfoButtonComponent } from './suku-info-button/suku-info-button.component';
import { SukuPrimaryButtonComponent } from './suku-primary-button/suku-primary-button.component';
import { SukuSecondaryButtonComponent } from './suku-secondary-button/suku-secondary-button.component';
import { SukuDefaultButtonComponent } from './suku-default-button/suku-default-button.component';
import { SukuHomepageButtonComponent } from './suku-homepage-button/suku-homepage-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SukuInfoButtonComponent,
    SukuPrimaryButtonComponent,
    SukuSecondaryButtonComponent,
    SukuDefaultButtonComponent,
    SukuHomepageButtonComponent
  ],
  entryComponents: [
    SukuInfoButtonComponent,
    SukuPrimaryButtonComponent,
    SukuSecondaryButtonComponent,
    SukuDefaultButtonComponent,
    SukuHomepageButtonComponent
  ],
  exports: [
    SukuInfoButtonComponent,
    SukuPrimaryButtonComponent,
    SukuSecondaryButtonComponent,
    SukuDefaultButtonComponent,
    SukuHomepageButtonComponent
  ]
})
export class SukuButtonsModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const elements: any[] = [
      [SukuInfoButtonComponent, 'suku-info-button'],
      [SukuPrimaryButtonComponent, 'suku-primary-button'],
      [SukuSecondaryButtonComponent, 'suku-secondary-button'],
      [SukuDefaultButtonComponent, 'suku-default-button'],
      [SukuHomepageButtonComponent, 'suku-homepage-button']
    ];
    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }

}
