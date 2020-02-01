import { async, TestBed } from '@angular/core/testing';
import { ArrangeListModule } from './arrange-list.module';

describe('ArrangeListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArrangeListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArrangeListModule).toBeDefined();
  });
});
