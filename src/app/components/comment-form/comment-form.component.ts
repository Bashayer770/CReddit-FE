import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css',
})
export class CommentFormComponent {
  @Output() submitComment = new EventEmitter<{
    username: string;
    comment: string;
  }>();

  commentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      username: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      this.submitComment.emit(this.commentForm.value);
      this.commentForm.reset();
    }
  }
}
