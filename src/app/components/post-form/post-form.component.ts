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
  selector: 'app-post-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent {
  @Output() submitPost = new EventEmitter<{
    title: string;
    description: string;
  }>();

  postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.submitPost.emit(this.postForm.value);
      this.postForm.reset();
    }
  }
}
