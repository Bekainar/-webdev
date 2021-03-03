import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tehnika3',
  templateUrl: './tehnika3.component.html',
  styleUrls: ['./tehnika3.component.css']
})
export class Tehnika3Component implements OnInit {

  cnt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeCnt(){
    this.cnt ++;
  }

}
