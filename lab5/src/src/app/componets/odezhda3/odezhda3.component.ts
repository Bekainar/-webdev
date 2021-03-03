import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odezhda3',
  templateUrl: './odezhda3.component.html',
  styleUrls: ['./odezhda3.component.css']
})
export class Odezhda3Component implements OnInit {

  cnt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeCnt(){
    this.cnt ++;
  }

}
