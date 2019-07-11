import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuInfoButtonComponent } from './suku-info-button/suku-info-button.component';
import { SukuPrimaryButtonComponent } from './suku-primary-button/suku-primary-button.component';
import { SukuSecondaryButtonComponent } from './suku-secondary-button/suku-secondary-button.component';
import { SukuDefaultButtonComponent } from './suku-default-button/suku-default-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SukuInfoButtonComponent,
    SukuPrimaryButtonComponent,
    SukuSecondaryButtonComponent,
    SukuDefaultButtonComponent
  ],
  entryComponents: [
    SukuInfoButtonComponent,
    SukuPrimaryButtonComponent,
    SukuSecondaryButtonComponent,
    SukuDefaultButtonComponent
  ]
})
export class SukuButtonsModule {

  constructor(private injector: Injector) {
    const customElement = createCustomElement(SukuPrimaryButtonComponent, { injector });
    customElements.define('suku-primary-button', customElement);
  }

  ngDoBootstrap() { }
  // constructor(private injector: Injector) {
  //   const elements: any[] = [
  //     [SukuInfoButtonComponent, 'suku-info-button'],
  //     [SukuPrimaryButtonComponent, 'suku-primary-button'],
  //     [SukuSecondaryButtonComponent, 'suku-secondary-button'],
  //     [SukuDefaultButtonComponent, 'suku-default-button']
  //   ];
  //   for (const [component, name] of elements) {
  //     const el = createCustomElement(component, { injector: this.injector });
  //     customElements.define(name, el);
  //   }
  // }

}
