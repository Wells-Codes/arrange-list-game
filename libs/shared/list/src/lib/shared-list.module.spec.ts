import { async, TestBed } from '@angular/core/testing';
import { SharedListModule } from './shared-list.module';

describe('SharedListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedListModule).toBeDefined();
  });
});
