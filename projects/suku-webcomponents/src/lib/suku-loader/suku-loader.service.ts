import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuLoaderComponent } from './suku-loader.component';

@Injectable({
	providedIn: 'root'
})
export class SukuLoaderService {
	public loaderDialogWidth;
	public loaderDialogHeight;
	public loaderDialogClose = true;
	public onDialogClose: EventEmitter<any> = new EventEmitter<any>();

	constructor(public dialogService: MatDialog) {
		this.loaderDialogHeight = '420px';
		this.loaderDialogWidth = '42%';
	}

	public openLoader(data?) {
		if(data) {
			const dialogRef = this.dialogService.open(SukuLoaderComponent, {
				width: this.loaderDialogWidth,
				height: this.loaderDialogHeight,
				disableClose: this.loaderDialogClose,
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
					titleThreeId: data ? data.titleThreeId : ''
				}
			});
			dialogRef.afterClosed().subscribe((result) => {
				this.onDialogClose.emit(result);
			});
		} else {
			this.dialogService.closeAll();
		}

	}
}
