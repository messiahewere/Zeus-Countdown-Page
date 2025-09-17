import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainseventh } from './mainseventh';

describe('Mainseventh', () => {
  let component: Mainseventh;
  let fixture: ComponentFixture<Mainseventh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainseventh]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainseventh);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
