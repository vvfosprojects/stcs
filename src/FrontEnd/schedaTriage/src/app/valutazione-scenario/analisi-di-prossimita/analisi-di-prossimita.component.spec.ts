import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisiDiProssimitaComponent } from './analisi-di-prossimita.component';

describe('AnalisiDiProssimitaComponent', () => {
  let component: AnalisiDiProssimitaComponent;
  let fixture: ComponentFixture<AnalisiDiProssimitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisiDiProssimitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisiDiProssimitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
