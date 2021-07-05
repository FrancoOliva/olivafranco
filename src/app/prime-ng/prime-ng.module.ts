import { NgModule } from '@angular/core';


// PrimeNg
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';




@NgModule({
  exports: [
    MenubarModule,
    CardModule,
    ButtonModule,
    RippleModule
    
  ]
})
export class PrimeNgModule { }
