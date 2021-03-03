import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tehnika4',
  templateUrl: './tehnika4.component.html',
  styleUrls: ['./tehnika4.component.css']
})
export class Tehnika4Component implements OnInit {

  cnt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeCnt(){
    this.cnt ++;
  }

}
