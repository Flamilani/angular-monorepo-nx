import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStoreService } from './services/data-store/data-store.service';
import { LayoutsModule } from '@angular-monorepo-nx/layouts';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [CommonModule],
  exports: [LayoutsModule],
  providers: [DataStoreService],
  declarations: [InputComponent],
})
export class ShareModule {}
