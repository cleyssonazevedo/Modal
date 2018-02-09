import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [
        CommonModule,
        TranslateModule
    ]
})
export class SharedModule { }
