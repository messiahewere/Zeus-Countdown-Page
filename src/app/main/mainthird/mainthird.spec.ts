import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainthird } from './mainthird';

describe('Mainthird', () => {
  let component: Mainthird;
  let fixture: ComponentFixture<Mainthird>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainthird]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainthird);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
