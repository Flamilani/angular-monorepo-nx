import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStoreService } from './services/data-store/data-store.service';

@NgModule({
  imports: [CommonModule],
  providers: [DataStoreService]
})
export class ShareModule {}
