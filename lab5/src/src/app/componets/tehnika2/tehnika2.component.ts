import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tehnika2',
  templateUrl: './tehnika2.component.html',
  styleUrls: ['./tehnika2.component.css']
})
export class Tehnika2Component implements OnInit {

  cnt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeCnt(){
    this.cnt ++;
  }

}
