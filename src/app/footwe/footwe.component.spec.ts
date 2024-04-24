import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootweComponent } from './footwe.component';

describe('FootweComponent', () => {
  let component: FootweComponent;
  let fixture: ComponentFixture<FootweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootweComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
