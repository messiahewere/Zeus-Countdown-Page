import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainfirst } from './mainfirst';

describe('Mainfirst', () => {
  let component: Mainfirst;
  let fixture: ComponentFixture<Mainfirst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainfirst]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainfirst);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
