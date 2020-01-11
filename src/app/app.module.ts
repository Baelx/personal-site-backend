import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule,MatOptionModule, MatSelectModule, MatIconModule, MatSidenavModule} from '@angular/material'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      PostEditComponent,
      PostCreateComponent
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
      MatSidenavModule,
      FormsModule,
      CKEditorModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
