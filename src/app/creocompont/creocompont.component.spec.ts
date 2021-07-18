import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreocompontComponent } from './creocompont.component';

describe('CreocompontComponent', () => {
  let component: CreocompontComponent;
  let fixture: ComponentFixture<CreocompontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreocompontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreocompontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
