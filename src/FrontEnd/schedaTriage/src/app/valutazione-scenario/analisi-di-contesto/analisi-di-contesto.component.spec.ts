import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisiDiContestoComponent } from './analisi-di-contesto.component';

describe('AnalisiDiContestoComponent', () => {
  let component: AnalisiDiContestoComponent;
  let fixture: ComponentFixture<AnalisiDiContestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisiDiContestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisiDiContestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
