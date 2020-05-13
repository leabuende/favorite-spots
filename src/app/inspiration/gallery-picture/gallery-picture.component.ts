import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gallery-picture',
  templateUrl: './gallery-picture.component.html',
  styleUrls: ['./gallery-picture.component.css']
})
export class GalleryPictureComponent implements OnInit {
  @Input() cards: any;
  @Input() index: Number;
  constructor() { }

  ngOnInit(): void {
  }

}
