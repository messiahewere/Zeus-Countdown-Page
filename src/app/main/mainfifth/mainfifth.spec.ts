import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainfifth } from './mainfifth';

describe('Mainfifth', () => {
  let component: Mainfifth;
  let fixture: ComponentFixture<Mainfifth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainfifth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainfifth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
