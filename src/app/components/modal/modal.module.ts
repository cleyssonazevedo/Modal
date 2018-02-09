import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [ ModalComponent ],
  exports: [ ModalComponent ]
})
export class ModalModule { }
