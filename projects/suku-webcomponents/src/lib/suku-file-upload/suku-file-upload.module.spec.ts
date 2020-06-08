import { SukuFileUploadModule } from './suku-file-upload.module';

describe('UploadsModule', () => {
  let uploadsModule: SukuFileUploadModule;

  beforeEach(() => {
    uploadsModule = new SukuFileUploadModule();
  });

  it('should create an instance', () => {
    expect(uploadsModule).toBeTruthy();
  });
});
