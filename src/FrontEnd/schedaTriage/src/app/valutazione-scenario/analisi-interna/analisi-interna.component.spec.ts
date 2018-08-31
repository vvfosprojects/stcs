import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisiInternaComponent } from './analisi-interna.component';

describe('AnalisiInternaComponent', () => {
  let component: AnalisiInternaComponent;
  let fixture: ComponentFixture<AnalisiInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisiInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisiInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
