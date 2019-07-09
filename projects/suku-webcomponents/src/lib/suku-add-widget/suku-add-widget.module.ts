import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuAddWidgetComponent } from './suku-add-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SukuAddWidgetComponent],
  entryComponents: [SukuAddWidgetComponent]
})
export class SukuAddIconWidgetModule {
  constructor(private injector: Injector) {
    const elements: any[] = [
      [SukuAddWidgetComponent, 'suku-add-widget']
    ];
    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
  ngDoBoostrap() { }
}
