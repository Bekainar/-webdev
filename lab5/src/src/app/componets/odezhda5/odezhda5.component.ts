import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odezhda5',
  templateUrl: './odezhda5.component.html',
  styleUrls: ['./odezhda5.component.css']
})
export class Odezhda5Component implements OnInit {

  cnt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeCnt(){
    this.cnt ++;
  }

}
