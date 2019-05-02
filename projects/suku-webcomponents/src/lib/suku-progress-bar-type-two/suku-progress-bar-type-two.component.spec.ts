import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuProgressBarTypeTwoComponent } from './suku-progress-bar-type-two.component';

describe('SukuProgressBarTypeTwoComponent', () => {
	let component: SukuProgressBarTypeTwoComponent;
	let fixture: ComponentFixture<SukuProgressBarTypeTwoComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ SukuProgressBarTypeTwoComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(SukuProgressBarTypeTwoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
