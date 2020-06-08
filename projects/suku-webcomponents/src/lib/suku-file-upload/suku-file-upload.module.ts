import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SukuDropZoneDirective } from './suku-dropzone-directive/drop-zone.directive';
import { SukuFileUploadComponent } from './suku-file-upload.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SukuFileUploadComponent, SukuDropZoneDirective],
  exports: [SukuFileUploadComponent]
})
export class SukuFileUploadModule { }
