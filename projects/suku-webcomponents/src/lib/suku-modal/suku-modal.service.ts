import { Injectable, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuConfirmationComponent } from '../suku-confirmation/suku-confirmation.component';
@Injectable({
	providedIn: 'root'
})
export class SukuModalService {
	public confirmationDialogWidth;
	public confirmationDialogHeight;
	public confirmationDialogClose;
	// public onDialogClose: EventEmitter<any> = new EventEmitter<any>();
	public onDialogCloseInterest: EventEmitter<any> = new EventEmitter<any>();
	public onDialogCloseList: EventEmitter<any> = new EventEmitter<any>();
	public onDialogClosePlaceBid: EventEmitter<any> = new EventEmitter<any>();
	public onDialogCloseAcceptBid: EventEmitter<any> = new EventEmitter<any>();
	public onDialogCloseSendPayment: EventEmitter<any> = new EventEmitter<any>();
	public	onDialogCloseDeleteList: EventEmitter<any> = new EventEmitter<any>();
	public onDialogCloseCancelBid: EventEmitter<any> = new EventEmitter<any>();
	public onDialogCloseUpdateInterest: EventEmitter<any> = new EventEmitter<any>();

	constructor(public dialogService: MatDialog) {
		this.confirmationDialogHeight = 'auto';
		this.confirmationDialogWidth = '500px';
	}

	public openConfirmationDialogInterest(data?) {
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
			this.onDialogCloseInterest.emit(result);
		});
	}

	public openConfirmationDialogList(data?) {
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
			this.onDialogCloseList.emit(result);
		});
	}
	public openConfirmationDialogPlaceBid(data?) {
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
			this.onDialogClosePlaceBid.emit(result);
		});
	}
	public openConfirmationDialogAcceptBid(data?) {
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
			this.onDialogCloseAcceptBid.emit(result);
		});
	}
	public openConfirmationDialogSendPayment(data?) {
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
			this.onDialogCloseSendPayment.emit(result);
		});
	}
	public openConfirmationDialogDeleteList(data?) {
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
			this.onDialogCloseDeleteList.emit(result);
		});
	}

	public openConfirmationDialogCancelBid(data?) {
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
			this.onDialogCloseCancelBid.emit(result);
		});
	}

	public openConfirmationDialogUpdateInterest(data?) {
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
			this.onDialogCloseUpdateInterest.emit(result);
		});
	}
}
