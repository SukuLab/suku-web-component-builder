import { TestBed } from '@angular/core/testing';

import { SukuWebcomponentsService } from './suku-webcomponents.service';

describe('SukuWebcomponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SukuWebcomponentsService = TestBed.get(SukuWebcomponentsService);
    expect(service).toBeTruthy();
  });
});
