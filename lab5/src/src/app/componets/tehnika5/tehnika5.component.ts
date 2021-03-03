import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tehnika5',
  templateUrl: './tehnika5.component.html',
  styleUrls: ['./tehnika5.component.css']
})
export class Tehnika5Component implements OnInit {

  cnt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeCnt(){
    this.cnt ++;
  }

}
