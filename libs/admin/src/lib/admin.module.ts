import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [LoginComponent],
})
export class AdminModule {}
