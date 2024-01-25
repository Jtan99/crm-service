// hello.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  // Add other routes if needed
];

@NgModule({
  declarations: [HelloComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HelloModule {}
