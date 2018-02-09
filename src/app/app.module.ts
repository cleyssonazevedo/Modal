import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { ModalModule } from './components/modal';
import { LanguageService } from './service/language.service';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    }),
    ModalModule
  ],
  bootstrap: [AppComponent],
  providers: [ TranslateService, LanguageService ]
})
export class AppModule { }
