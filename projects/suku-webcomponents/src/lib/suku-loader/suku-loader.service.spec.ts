import { TestBed, inject } from '@angular/core/testing';
import { SukuLoaderService } from './suku-loader.service';

describe('ModalService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [SukuLoaderService]
		});
	});

	it(
		'should be created',
		inject([SukuLoaderService], (service: SukuLoaderService) => {
			expect(service).toBeTruthy();
		})
	);
});
