import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';


const routes: Routes = [
  { path: 'admin', component: LoginComponent },
  { path: 'edit', component: PostEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
