import { Component, OnInit } from '@angular/core';
import * as DocumentEditor from '@ckeditor/ckeditor5-build-decoupled-document';

import { NgForm } from '@angular/forms';

// Import Post model TS interface
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit {

  public editor;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.editor = DocumentEditor;
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postsService.addPost(form.value.title, form.value.content, form.value.summary, form.value.categories.split(','));
    form.reset();
  }
}
