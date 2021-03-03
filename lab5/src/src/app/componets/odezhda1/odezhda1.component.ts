import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odezhda1',
  templateUrl: './odezhda1.component.html',
  styleUrls: ['./odezhda1.component.css']
})
export class Odezhda1Component implements OnInit {

  cnt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeCnt(){
    this.cnt ++;
  }

}
