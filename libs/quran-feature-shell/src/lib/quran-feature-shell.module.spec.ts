import { async, TestBed } from '@angular/core/testing';
import { QuranFeatureShellModule } from './quran-feature-shell.module';

describe('QuranFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QuranFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QuranFeatureShellModule).toBeDefined();
  });
});
