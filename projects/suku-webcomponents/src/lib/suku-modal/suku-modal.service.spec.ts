import { TestBed, inject } from '@angular/core/testing';
import { SukuModalService } from './suku-modal.service';

describe('ModalService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ SukuModalService ]
		});
	});

	it(
		'should be created',
		inject([ SukuModalService ], (service: SukuModalService) => {
			expect(service).toBeTruthy();
		})
	);
});
