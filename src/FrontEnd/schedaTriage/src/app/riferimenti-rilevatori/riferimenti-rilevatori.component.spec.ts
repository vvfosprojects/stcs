import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiferimentiRilevatoriComponent } from './riferimenti-rilevatori.component';

describe('RiferimentiRilevatoriComponent', () => {
  let component: RiferimentiRilevatoriComponent;
  let fixture: ComponentFixture<RiferimentiRilevatoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiferimentiRilevatoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiferimentiRilevatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
