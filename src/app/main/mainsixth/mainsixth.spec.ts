import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainsixth } from './mainsixth';

describe('Mainsixth', () => {
  let component: Mainsixth;
  let fixture: ComponentFixture<Mainsixth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainsixth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainsixth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
