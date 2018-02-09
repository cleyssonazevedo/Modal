import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { LanguageService } from './service/language.service';
import { Language } from './language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public open = false;
  public lang: Language;

  constructor (public translate: TranslateService, private language: LanguageService) {
    this.language.getLang().subscribe((lang) => this.translate.setDefaultLang(lang.toString())).unsubscribe();

    this.language.getLang().subscribe((lang) => {
      this.translate.use(lang.toString());
      this.lang = lang;
    });

    this.translate.setTranslation('pt-BR', {
      Aberto: 'Aberto',
      Conteudo: 'Conteudo'
    });
  }

  changeLanguage(lang) {
    let newLang: Language;

    switch (lang) {
      case Language.BR:
        newLang = Language.EN;
      break;

      case Language.EN:
        newLang = Language.BR;
      break;

      default:
        newLang = Language.BR;
    }

    this.language.setLang(newLang).subscribe().unsubscribe();
  }
}

