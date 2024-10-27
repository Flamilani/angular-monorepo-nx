import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  imports: [CommonModule, RouterModule, AuthModule.forRoot()],
  declarations: [HeaderComponent, FooterComponent, DarkModeComponent, AuthButtonComponent],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutsModule {}
