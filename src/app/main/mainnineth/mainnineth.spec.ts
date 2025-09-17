import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainnineth } from './mainnineth';

describe('Mainnineth', () => {
  let component: Mainnineth;
  let fixture: ComponentFixture<Mainnineth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainnineth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainnineth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
