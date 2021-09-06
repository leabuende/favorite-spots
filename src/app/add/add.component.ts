import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('My Favorite Spots - Contribute');
  }
  ngOnInit(): void {
  }

}
