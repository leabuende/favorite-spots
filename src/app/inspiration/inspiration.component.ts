import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {

  constructor() { }
  size: number =  Math.floor(Math.random() * 6);
  colors: any = ['yellow','green','red', 'blue']

  cards: any = [
    {
      border: this.colors[0],
      width: 4
    },
    {
      border:this.colors[1] ,
      width: 8
    },
    {
      border:this.colors[2],
      width: 6
    },
    {
      border:this.colors[3],
      width: 6
    },
    {
      border:this.colors[0],
      width: 8
    },
    {
      border:this.colors[1],
      width: 4
    },
    {
      border: this.colors[0],
      width: 4
    },
    {
      border:this.colors[1] ,
      width: 8
    },
    {
      border:this.colors[2],
      width: 6
    },
    {
      border:this.colors[3],
      width: 6
    },
    {
      border:this.colors[0],
      width: 8
    },
    {
      border:this.colors[1],
      width: 4
    }
  ]
  ngOnInit(): void {
  }

}
