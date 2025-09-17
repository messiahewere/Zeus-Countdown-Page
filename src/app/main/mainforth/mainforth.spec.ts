import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainforth } from './mainforth';

describe('Mainforth', () => {
  let component: Mainforth;
  let fixture: ComponentFixture<Mainforth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainforth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainforth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
