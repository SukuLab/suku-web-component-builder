import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuProgressBarTypeOneComponent } from './suku-progress-bar-type-one.component';

describe('SukuProgressBarTypeOneComponent', () => {
	let component: SukuProgressBarTypeOneComponent;
	let fixture: ComponentFixture<SukuProgressBarTypeOneComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ SukuProgressBarTypeOneComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(SukuProgressBarTypeOneComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
