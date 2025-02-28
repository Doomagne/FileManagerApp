import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileStoredPage } from './file-stored.page';

const routes: Routes = [
  {
    path: '',
    component: FileStoredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileStoredPageRoutingModule {}