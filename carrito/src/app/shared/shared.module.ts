import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExponencialPipe } from './pipes/exponencial/exponencial.pipe';
import { HighlightDirective } from './directives/HighLight/highlight.directive';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ExponencialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    ExponencialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
