import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPlaygroundComponent } from './rxjs-playground.component';

describe('RxjsPlaygroundComponent', () => {
  let component: RxjsPlaygroundComponent;
  let fixture: ComponentFixture<RxjsPlaygroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsPlaygroundComponent]
    });
    fixture = TestBed.createComponent(RxjsPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
