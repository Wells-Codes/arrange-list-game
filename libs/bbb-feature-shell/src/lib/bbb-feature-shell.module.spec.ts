import { async, TestBed } from '@angular/core/testing';
import { BbbFeatureShellModule } from './bbb-feature-shell.module';

describe('BbbFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BbbFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BbbFeatureShellModule).toBeDefined();
  });
});
