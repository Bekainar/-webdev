import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odezhda4',
  templateUrl: './odezhda4.component.html',
  styleUrls: ['./odezhda4.component.css']
})
export class Odezhda4Component implements OnInit {

  cnt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeCnt(){
    this.cnt ++;
  }

}
