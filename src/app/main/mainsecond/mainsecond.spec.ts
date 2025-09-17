import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainsecond } from './mainsecond';

describe('Mainsecond', () => {
  let component: Mainsecond;
  let fixture: ComponentFixture<Mainsecond>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainsecond]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainsecond);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
