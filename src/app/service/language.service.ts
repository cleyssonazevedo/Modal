import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Language } from '../language';

@Injectable()
export class LanguageService {
  private lang = new BehaviorSubject<Language>(Language.BR);

  public getLang(): Observable<Language> {
    return this.lang.asObservable();
  }

  public setLang(lang: Language): Observable<Language> {
    this.lang.next(lang);
    return this.lang.asObservable();
  }
}
