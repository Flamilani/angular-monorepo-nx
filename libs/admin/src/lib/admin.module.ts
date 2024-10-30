import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { ShareModule } from '@angular-monorepo-nx/share';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    AdminRoutingModule,
    ShareModule
  ],
  declarations: [LoginComponent],
})
export class AdminModule {}
