import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuConfirmationComponent } from '../suku-confirmation/suku-confirmation.component';
@Injectable({
	providedIn: 'root'
})
export class SukuModalService {
	public dialogWidth;
	public dialogHeight;
	constructor(public dialogService: MatDialog) {
		this.dialogHeight = 'auto';
		this.dialogWidth = '564px';
	}

	public openInfoModal(data?) {
		const dialogRef = this.dialogService.open(SukuConfirmationComponent, {
			width: this.dialogWidth,
			height: this.dialogHeight,
			data: {
				icon: data.icon,
				iconCustomClass: data.iconCustomClass,
				iconId: data.iconId,
				titleOne: data.titleOne,
				titleOneId: data.titleOneId,
				titleTwo: data.titleTwo,
				titleTwoId: data.titleOneId,
				titleThree: data.titleThree,
				titleThreeId: data.titleThreeId,
				buttonLableOne: data.buttonLableOne,
				buttonLableOneId: data.buttonLableOneId,
				buttonLableTwo: data.buttonLableTwo,
				buttonLableTwoId: data.buttonLableTwoId,
				buttonCustomClass: data.buttonCustomClass
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('result', result);
		});
	}

	public loader() {

	}
}

