import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FileStoredPageRoutingModule } from './file-stored-routing.module';
import { FileStoredPage } from './file-stored.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileStoredPageRoutingModule,
    FileStoredPage
  ]
})
export class FileStoredPageModule {}