import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlaryComponent } from './glary.component';

describe('GlaryComponent', () => {
  let component: GlaryComponent;
  let fixture: ComponentFixture<GlaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
