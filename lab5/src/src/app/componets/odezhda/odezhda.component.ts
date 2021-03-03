import { Component, OnInit } from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-odezhda',
  templateUrl: './odezhda.component.html',
  styleUrls: ['./odezhda.component.css']
})
export class OdezhdaComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {

  }

  deleteB(bName){
    if (bName == 'qara' ){
      let elem = document.getElementById("qara");
      elem.parentNode.removeChild(elem);
    }
    else if (bName == 'tanba'){
      let elem = document.getElementById("tanba");
      elem.parentNode.removeChild(elem);
    }
    else if (bName == 'ksxbonah'){
      let elem = document.getElementById("ksxbonah");
      elem.parentNode.removeChild(elem);
    }
    else if (bName == 'alma'){
      let elem = document.getElementById("alma");
      elem.parentNode.removeChild(elem);
    }
    else if (bName == 'kozashu'){
      let elem = document.getElementById("kozashu");
      elem.parentNode.removeChild(elem);
    }
  }

}
