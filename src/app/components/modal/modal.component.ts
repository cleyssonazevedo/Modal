import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TranslateService } from 'ng2-translate';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('active', style({
        display: 'block',
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('inactive', style({
        transform: 'translateY(-50%)',
        opacity: 0
      })),
      transition('inactive => active', animate('300ms ease-out')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class ModalComponent {
  @Input('open')
  public open: boolean;

  @Output()
  public openChange = new EventEmitter<boolean>();

  @Input()
  public title: string;

  constructor (private translate: TranslateService, private language: LanguageService) {
    this.language.getLang().subscribe((lang) => this.translate.setDefaultLang(lang)).unsubscribe();
    this.language.getLang().subscribe((lang) => this.translate.use(lang.toString()));
  }

  close() {
    this.openChange.emit(false);
  }
}
