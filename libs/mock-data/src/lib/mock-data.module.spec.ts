import { async, TestBed } from '@angular/core/testing';
import { MockDataModule } from './mock-data.module';

describe('MockDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MockDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MockDataModule).toBeDefined();
  });
});
