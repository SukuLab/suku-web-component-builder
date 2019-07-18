import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuLoaderComponent } from './suku-loader.component';

@Injectable({
	providedIn: 'root'
})
export class SukuLoaderService {
	public confirmationDialogWidth;
	public confirmationDialogHeight;
	public confirmationDialogClose;
	public onDialogClose: EventEmitter<any> = new EventEmitter<any>();

	constructor(public dialogService: MatDialog) {
		this.confirmationDialogHeight = '420px';
		this.confirmationDialogWidth = '42%';
	}

	public openLoader(data?) {
		const dialogRef = this.dialogService.open(SukuLoaderComponent, {
			width: this.confirmationDialogWidth,
			height: this.confirmationDialogHeight,
			disableClose: this.confirmationDialogClose,
			data: {
				logo: data ? data.icon : '',
				logoCustomClass: data ? data.iconCustomClass : '',
				logoId: data ? data.iconId : '',
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
}

