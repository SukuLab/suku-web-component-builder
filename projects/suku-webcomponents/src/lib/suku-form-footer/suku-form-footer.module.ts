import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuFormFooterComponent } from './suku-form-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SukuFormFooterComponent
  ],
  entryComponents: [
    SukuFormFooterComponent
  ],
  exports: [
    SukuFormFooterComponent
  ]
})
export class SukuFormFooterModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const elements: any[] = [
      [SukuFormFooterComponent, 'suku-form-footer']
    ];
    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }

}
