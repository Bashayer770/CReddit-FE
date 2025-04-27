import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-postcard',
  imports: [CommonModule],
  templateUrl: './postcard.component.html',
  styleUrl: './postcard.component.css',
})
export class PostcardComponent {
  @Input() post!: Post;
  @Output() viewDetails = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  onCardClick() {
    this.viewDetails.emit(this.post.id);
  }

  onDeleteClick(event: Event) {
    event.stopPropagation();
    this.delete.emit(this.post.id);
  }
}
