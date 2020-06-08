import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuBidTagComponent } from './suku-bid-tag.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SukuBidTagComponent],
  entryComponents: [SukuBidTagComponent],
  exports: [SukuBidTagComponent]
})
export class SukuBidTagModule {
  constructor(private injector: Injector) {
    const elements: any[] = [
      [SukuBidTagComponent, 'suku-bid-tag']
    ];
    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
  ngDoBoostrap() { }
}
