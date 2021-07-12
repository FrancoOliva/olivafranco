import { NgModule } from '@angular/core';


// PrimeNg
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';

import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';




@NgModule({
  exports: [
    MenubarModule,
    CardModule,
    ButtonModule,
    RippleModule,
    DividerModule,
    DialogModule
    
  ]
})
export class PrimeNgModule { }
