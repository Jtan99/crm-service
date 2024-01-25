// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloModule } from './hello/hello.module';
import { GoodbyeComponent } from './goodbye/goodbye.component';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  { path: 'hello', loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule) },
  { path: 'goodbye', component: GoodbyeComponent },
  { path: 'user-table', component: UserTableComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
