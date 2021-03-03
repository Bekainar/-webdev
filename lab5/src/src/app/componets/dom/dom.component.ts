import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css']
})
export class DomComponent implements OnInit {

  name: string;
  gorod: string;
  model: string;
  photo: string;
  colors: Colors;
  options: string[];
  isEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.name = '--------------';
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
      this.name = '7-комнатный дом';
      this.gorod = 'Кыргауылды, Алматинская обл.';
      this.model = '280 м²';
      this.photo = 'https://astkt-photos-kr.kcdn.kz/webp/5d/5db77f47-09a6-46b8-b4df-c697244d7f3b/13-750x470.webp';
      this.colors = {
        car: 'кирпичный, 2018 г.п.',
        salon: 'евроремонт',
        wheels: '+7 701 555 7486'
      };
      this.options = ['Безопасность', 'Интернет', 'Вода', 'Отопление', 'Электричество'];
    } else if (carName == 'audi') {
      this.name = '12-комнатный дом';
      this.gorod = 'Алматы, Медеуский р-н';
      this.model = '1240 м²';
      this.photo = 'https://astkt-photos-kr.kcdn.kz/webp/c6/c6b2165e-4947-49ad-a4cd-63864875fdb9/2-750x470.webp';
      this.colors = {
        car: 'кирпичный, 2016 г.п.',
        salon: 'евроремонт',
        wheels: '+7 707 301 1931\n' +
          '+7 727 327 2024'
      };
      this.options = ['Безопасность', 'Электричество', 'Отопление'];
    } else if (carName == 'mer'){
      this.name = '6-комнатный дом';
      this.gorod = 'Алматы, Бостандыкский р-н';
      this.model = '330 м²';
      this.photo = 'https://astkt-photos-kr.kcdn.kz/webp/4b/4bded376-f6c9-4f14-b834-cc46c36f8eee/13-750x470.webp';
      this.colors = {
        car: 'кирпичный, 2017 г.п.',
        salon: 'евроремонт',
        wheels: '+7 747 818 6399'
      };
      this.options = ['Электричество', 'Отопление', 'Интернет', 'Высокий кирпичный забор'];
    } else if (carName == 'toyota') {
      this.name = '4-комнатный дом';
      this.gorod = 'Алматы, Бостандыкский р-н';
      this.model = '109.6 м²';
      this.photo = 'https://astkt-photos-kr.kcdn.kz/webp/6f/6f2de58b-7724-45fa-b75f-91365dfa44e3/105-750x470.webp';
      this.colors = {
        car: 'монолитный, 2021 г.п.',
        salon: 'свободная планировка',
        wheels: '+7 708 299 0807'
      };
      this.options = ['Безопасность', 'Интернет', 'Вода', 'Отопление', 'Электричество'];
    }else if (carName == 'lexus') {
      this.name = '10-комнатный дом';
      this.gorod = 'Алматы, Бостандыкский р-н';
      this.model = '430 м²';
      this.photo = 'https://astkt-photos-kr.kcdn.kz/webp/5a/5acbf39f-5f06-4f22-ab19-5ccac01cdefc/31-750x470.webp';
      this.colors = {
        car: 'кирпичный, 2018 г.п.',
        salon: 'евроремонт',
        wheels: '+7 701 749 0250\n' +
          '+7 700 749 0250'
      };
      this.options = ['Безопасность', 'Вода', 'Баня', 'Гараж', 'Бассейн'];
    }
  }
}

interface Colors{
  car: string;
  salon: string;
  wheels: string;
}


