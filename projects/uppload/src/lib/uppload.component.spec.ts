import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpploadComponent } from './uppload.component';

describe('UpploadComponent', () => {
  let component: UpploadComponent;
  let fixture: ComponentFixture<UpploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
