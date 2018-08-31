import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutazioneScenarioComponent } from './valutazione-scenario.component';

describe('ValutazioneScenarioComponent', () => {
  let component: ValutazioneScenarioComponent;
  let fixture: ComponentFixture<ValutazioneScenarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValutazioneScenarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutazioneScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
