import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SukuACHSettingsComponent } from './suku-achsettings.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SukuACHSettingsComponent],
  entryComponents: [SukuACHSettingsComponent]
})
export class SukuAchSettingModule {
  constructor(private injector: Injector) {
    const elements: any[] = [
      [SukuACHSettingsComponent, 'suku-ach-setting']
    ];
    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
  ngDoBoostrap() { }
}
