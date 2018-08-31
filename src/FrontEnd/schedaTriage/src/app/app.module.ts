import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RichiedenteComponent } from './richiedente/richiedente.component';
import { ValutazioneScenarioComponent } from './valutazione-scenario/valutazione-scenario.component';
import { RiferimentiRilevatoriComponent } from './riferimenti-rilevatori/riferimenti-rilevatori.component';
import { ComunicazioniComponent } from './comunicazioni/comunicazioni.component';
import { AnalisiDiContestoComponent } from './valutazione-scenario/analisi-di-contesto/analisi-di-contesto.component';
import { AnalisiDiProssimitaComponent } from './valutazione-scenario/analisi-di-prossimita/analisi-di-prossimita.component';
import { AnalisiInternaComponent } from './valutazione-scenario/analisi-interna/analisi-interna.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RichiedenteComponent,
    ValutazioneScenarioComponent,
    RiferimentiRilevatoriComponent,
    ComunicazioniComponent,
    AnalisiDiContestoComponent,
    AnalisiDiProssimitaComponent,
    AnalisiInternaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
