import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css'],
})
export class InspirationComponent implements OnInit {

  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle('My Favorite Spots - Inspiration');
  }
  size: number =  Math.floor(Math.random() * 6);
  colors: any = ['yellow','green','red', 'blue']

  cards: any = [
    {
      id:1,
      border: this.colors[0],
      width: 4,
      source: 'assets//1.jpg'
    },
    {
      id:2,
      border:this.colors[1] ,
      width: 8,
      source: 'assets//2.jpg'
    },
    {
      id:3,
      border:this.colors[2],
      width: 6,
      source: 'assets//3.jpg'

    },
    {
      id:4,
      index:'4',
      border:this.colors[3],
      width: 6,
      source: 'assets//5.jpg'
    }

  ]
  ngOnInit(): void {
  }

}
