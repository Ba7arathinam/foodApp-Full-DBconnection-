import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocomComponent } from './democom.component';

describe('DemocomComponent', () => {
  let component: DemocomComponent;
  let fixture: ComponentFixture<DemocomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemocomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemocomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
