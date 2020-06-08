import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { SukuLoaderComponent } from './suku-loader.component';

@NgModule({
  imports: [
    CommonModule, MatDialogModule
  ],
  declarations: [SukuLoaderComponent],
  entryComponents: [SukuLoaderComponent]
})
export class SukuLoaderModule { }
