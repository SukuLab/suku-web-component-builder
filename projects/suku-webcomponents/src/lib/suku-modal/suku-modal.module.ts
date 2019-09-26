import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { SukuConfirmationComponent } from '../suku-confirmation/suku-confirmation.component';

@NgModule({
  imports: [
    CommonModule, MatDialogModule,
    HttpClientModule,
    TranslateModule
  ],
  declarations: [SukuConfirmationComponent],
  entryComponents: [SukuConfirmationComponent]
})
export class SukuModalModule { }
