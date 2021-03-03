import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tehnika',
  templateUrl: './tehnika.component.html',
  styleUrls: ['./tehnika.component.css']
})
export class TehnikaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
