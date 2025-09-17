import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maineight } from './maineight';

describe('Maineight', () => {
  let component: Maineight;
  let fixture: ComponentFixture<Maineight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maineight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maineight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
