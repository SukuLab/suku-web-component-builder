import { Injectable, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuConfirmationComponent } from '../suku-confirmation/suku-confirmation.component';
import { SukuConfirmationModelComponent } from '../suku-confirmation-model/suku-confirmation-model.component';

@Injectable({
	providedIn: 'root'
})
export class SukuModalService {
	public confirmationDialogWidth;
	public confirmationDialogHeight;
	public confirmationDialogClose;
	public onDialogClose: EventEmitter<any> = new EventEmitter<any>();

	constructor(public dialogService: MatDialog) {
		this.confirmationDialogHeight = 'auto';
		this.confirmationDialogWidth = '500px';
	}

	public openConfirmationDialog(data?) {
		const dialogRef = this.dialogService.open(SukuConfirmationComponent, {
			width: this.confirmationDialogWidth,
			height: this.confirmationDialogHeight,
			disableClose: this.confirmationDialogClose,
			data: {
				icon: data ? data.icon : '',
				iconCustomClass: data ? data.iconCustomClass : '',
				iconId: data ? data.iconId : '',
				titleOne: data ? data.titleOne : '',
				titleOneId: data ? data.titleOneId : '',
				titleTwo: data ? data.titleTwo : '',
				titleTwoId: data ? data.titleOneId : '',
				titleThree: data ? data.titleThree : '',
				titleThreeId: data ? data.titleThreeId : '',
				buttonLableOne: data ? data.buttonLableOne : '',
				buttonLableOneId: data ? data.buttonLableOneId : '',
				buttonLableTwo: data ? data.buttonLableTwo : '',
				buttonLableTwoId: data ? data.buttonLableTwoId : '',
				buttonCustomClass: data ? data.buttonCustomClass : ''
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			this.onDialogClose.emit(result);
		});
	}

	public openConfirmationModelDialog(data?) {
		const dialogRef = this.dialogService.open(SukuConfirmationModelComponent, {
			width: this.confirmationDialogWidth,
			height: this.confirmationDialogHeight,
			disableClose: this.confirmationDialogClose,
			data: {
				imgSrc: data ? data.imgSrc : '',
				message: data ? data.message : '',
  				description: data ? data.description : '',
  				buttonText: data ? data.buttonText : ''
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			this.onDialogClose.emit(result);
		});
	}
}
