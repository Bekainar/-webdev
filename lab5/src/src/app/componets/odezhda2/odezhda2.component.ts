import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odezhda2',
  templateUrl: './odezhda2.component.html',
  styleUrls: ['./odezhda2.component.css']
})
export class Odezhda2Component implements OnInit {

  cnt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeCnt(){
    this.cnt ++;
  }

}
