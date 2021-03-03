import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  photo: string;
  colors: Colors;
  options: string[];
  isEdit: boolean = false;

  constructor() { }

  ngOnInit() {
    this.name = 'Выбери машину';
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option){
    for (let i = 0; i< this.options.length; i++) {
      if (this.options[i] == option){
        this.options.splice(i, 1);
        break;
      }
    }
  }

  carSelect(carName) {
    if (carName == 'bmw') {
    this.name = 'BMW';
    this.speed = 280;
    this.model = 'M5';
    this.photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2018_BMW_M5_Automatic_4.4.jpg/305px-2018_BMW_M5_Automatic_4.4.jpg';
    this.colors = {
      car: 'Синий',
      salon: 'Белый',
      wheels: 'Серебристый'
    };
    this.options = ['Система трека', 'Автопилот', 'Авто Паркинг', 'Круиз контроль'];
  } else if (carName == 'audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.photo = 'https://autoru-mag.s3.yandex.net/2019/07/22/9b30fc18b10a4ac09843a6e240932a5e.jpeg';
      this.colors = {
        car: 'Белый',
        salon: 'Черный',
        wheels: 'Серебристый'
      };
      this.options = ['ABS', 'Автопилот', 'Авто Паркинг'];
    } else if (carName == 'mer'){
      this.name = 'Mercedes';
      this.speed = 180;
      this.model = 'C180';
      this.photo = 'https://sales.mercedes-mb-belyaevo.ru/upload/img/2019/07/07/5d21b72cd3d08_2560-0.jpeg';
      this.colors = {
        car: 'Белый',
        salon: 'Бордовый',
        wheels: 'Серебристый'
      };
      this.options = ['ABS', 'Автопилот', 'Авто Паркинг', 'Память сидений'];
    } else if (carName == 'toyota') {
      this.name = 'Toyota';
      this.speed = 240;
      this.model = 'Camry 70';
      this.photo = 'https://roadres.com/images/top/toyota/camry-v70.jpg';
      this.colors = {
        car: 'Синий',
        salon: 'Белый',
        wheels: 'Серебристый'
      };
      this.options = ['Система трека', 'Bluetooth', 'Авто Паркинг', 'Круиз контроль'];
    }else if (carName == 'lexus') {
      this.name = 'Lexus';
      this.speed = 250;
      this.model = 'Gs 350';
      this.photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VPjbyUBrNDsB1F4hxWUKn32SS0l0oSuXcw&usqp=CAU';
      this.colors = {
        car: 'Черный',
        salon: 'Бордовый',
        wheels: 'Белый'
      };
      this.options = ['360 камера', 'Автопилот', 'Авто Паркинг', 'Круиз контроль'];
    }
  }
}

interface Colors{
  car: string;
  salon: string;
  wheels: string;
}
