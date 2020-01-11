import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';


const routes: Routes = [
  { path: 'admin', component: LoginComponent },
  { path: 'edit', component: PostEditComponent },
  { path: 'add', component: PostCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
