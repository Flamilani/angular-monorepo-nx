import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, CommonModule, HomeRoutingModule],
  declarations: [AboutComponent, HomeComponent],
})
export class HomeModule {}
