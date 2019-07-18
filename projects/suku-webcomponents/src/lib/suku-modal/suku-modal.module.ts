import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SukuConfirmationComponent } from '../suku-confirmation/suku-confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule, MatDialogModule
  ],
  declarations: [SukuConfirmationComponent],
  entryComponents: [SukuConfirmationComponent],
  exports: [SukuConfirmationComponent]
})
export class SukuModalModule { }
