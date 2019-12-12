import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule,MatOptionModule, MatSelectModule, MatIconModule} from '@angular/material'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { QuillModule } from 'ngx-quill';
import { PostEditComponent } from './posts/post-edit/post-edit.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      PostEditComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule,
      FormsModule,
      QuillModule.forRoot(),
      ReactiveFormsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
