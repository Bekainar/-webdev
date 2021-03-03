import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tehnika1',
  templateUrl: './tehnika1.component.html',
  styleUrls: ['./tehnika1.component.css']
})
export class Tehnika1Component implements OnInit {

  cnt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeCnt(){
    this.cnt ++;
  }

}
