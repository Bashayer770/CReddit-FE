import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsServicesComponent } from './posts-services.component';

describe('PostsServicesComponent', () => {
  let component: PostsServicesComponent;
  let fixture: ComponentFixture<PostsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
