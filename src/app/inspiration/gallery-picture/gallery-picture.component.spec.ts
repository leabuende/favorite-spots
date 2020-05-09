import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPictureComponent } from './gallery-picture.component';

describe('GalleryPictureComponent', () => {
  let component: GalleryPictureComponent;
  let fixture: ComponentFixture<GalleryPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
