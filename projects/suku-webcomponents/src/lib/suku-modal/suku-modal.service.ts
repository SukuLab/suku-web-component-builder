import { Injectable, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuConfirmationComponent } from '../suku-confirmation/suku-confirmation.component';
import { SukuConfirmationModalComponent } from '../suku-confirmation-modal/suku-confirmation-modal.component';
import { SukuAddLicenseModalComponent } from '../suku-add-license-modal/suku-add-license-modal.component';
// import { Observable } from 'rxjs/Rx';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 

@Injectable({
	providedIn: 'root'
})

export class SukuModalService {
	// public uploadFiles =  new Subject<any>(); 
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
		const dialogRef = this.dialogService.open(SukuConfirmationModalComponent, {
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
    
    public openLicenseModalDialogDialog(data?) {
		const dialogRef = this.dialogService.open(SukuAddLicenseModalComponent, {
			width: 'auto',
			height: 'auto',
			disableClose: this.confirmationDialogClose,
			data: {
				controlOne: data? data.controlOne: '',
				controlTwo: data? data.controlTwo: '',
				dateControlOne: data? data.dateControlOne: '', 
				controlTwoRequiredd: data? data.controlTwoRequiredd: '',
				dateControlTwo: data? data.dateControlTwo: '',
				'controlOneRequired': data? data.controlOneRequired: '',
				controlTwoRequired: data? data.controlTwoRequired: '',
				dateControlOneRequired: data? data.dateControlOneRequired: '',
				dateControlTwoRequired: data? data.dateControlTwoRequired: '',
				'controlOnePatternEnabled': data? data.controlOnePatternEnabled: '',
				'controlTwoPatternEnabled': data? data.controlTwoPatternEnabled: '',
				'controlOnePattern': data? data.controlOnePattern: '',
				'controlTwoPattern': data? data.controlTwoPattern: '',
				'title': data? data.title: '',
				'subTitle': data? data.subTitle: '',
				'controlHint': data? data.controlHint: '',
				'hintClass': data? data.hintClass: '',
				'headerCutomStyle': data? data.headerCutomStyle: '',
				'startDateMaxDate': data? data.startDateMaxDate: '',
				'endDateMaxDate': data? data.endDateMaxDate: '',
				'startDateMinDate': data? data.startDateMinDate: '',
				'endDateMinDate': data? data.endDateMinDate: '',
				'controlOneId': data? data.controlOneId: '',
				controlTwoId: data? data.controlTwoId: '',
				dateControlOneId: data? data.dateControlOneId: '',
				dateControlTwoId: data? data.dateControlTwoId: '',
				controlTwoToolTip: data? data.controlTwoToolTip: '', 
				controlOnePlaceholder: data? data.controlOnePlaceholder: '',
				controlTwoPlaceholder: data? data.controlTwoPlaceholder: '',
				dateControlOnePlaceholder: data? data.dateControlOnePlaceholder: '',
				dateControlTwoPlaceholder: data? data.dateControlTwoPlaceholder: '',
				controlOneRquiredErrorMsg: data? data.controlOneRquiredErrorMsg: '',
				controlTwoRquiredErrorMsg: data? data.controlTwoRquiredErrorMsg: '',
				controlTwoPatternErrorMsg: data? data.controlTwoPatternErrorMsg: '',
				dateControlOneRquiredErrorMsg: data? data.dateControlOneRquired: '',
				dateControlTwoRquiredErrorMsg: data? data.dateControlTwoRquiredErrorMsg: '',
				acceptDocment: data? data.acceptDocment: '',
				uploadImg: data? data.uploadImg: '',
				uploadTitle: data? data.uploadTitle: '',
				fileListTitle: data? data.fileListTitle: '',
				fileInputId: data? data.fileInputId: '',
				filesArray: data? data.filesArray: '',
				fileRemoveBtnTxt: data? data.fileRemoveBtnTxt: '',
				fileRemoveBtnId: data? data.fileRemoveBtnId: '',
				uploadImgAltTxt: data? data.uploadImgAltTxt: '',
				cancelBtnText: data? data.cancelBtnText: '',
				submitBtnTxt: data? data.submitBtnTxt: '',
				submitBtnCustomClass: data? data.submitBtnCustomClass: '',
				cancelBtnCustomClass: data? data.cancelBtnCustomClass: '',
				
			} 	
		});
		dialogRef.afterClosed().subscribe((result) => {
			this.onDialogClose.emit(result);
		});
	}

}
