import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DarkModeComponent } from './dark-mode/dark-mode.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, FooterComponent, DarkModeComponent],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutsModule {}
