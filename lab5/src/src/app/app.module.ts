import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CarComponent } from './componets/car/car.component';
import { KontaktiComponent } from './componets/kontakti/kontakti.component';
import { MainscreenComponent } from './componets/mainscreen/mainscreen.component';
import { DomComponent } from './componets/dom/dom.component';
import { OsnovaComponent } from './componets/osnova/osnova.component';
import { OdezhdaComponent } from './componets/odezhda/odezhda.component';
import { TehnikaComponent } from './componets/tehnika/tehnika.component';
import { Odezhda1Component } from './componets/odezhda1/odezhda1.component';
import { Odezhda2Component } from './componets/odezhda2/odezhda2.component';
import { Odezhda3Component } from './componets/odezhda3/odezhda3.component';
import { Odezhda4Component } from './componets/odezhda4/odezhda4.component';
import { Odezhda5Component } from './componets/odezhda5/odezhda5.component';
import { Tehnika1Component } from './componets/tehnika1/tehnika1.component';
import { Tehnika2Component } from './componets/tehnika2/tehnika2.component';
import { Tehnika3Component } from './componets/tehnika3/tehnika3.component';
import { Tehnika4Component } from './componets/tehnika4/tehnika4.component';
import { Tehnika5Component } from './componets/tehnika5/tehnika5.component';


const appRoutes: Routes = [
  {path: '', component: MainscreenComponent},
  {path: 'main', component: OsnovaComponent},
  {path: 'about', component: KontaktiComponent},
  {path: 'car', component: CarComponent},
  {path: 'dom', component: DomComponent},
  {path: 'odezhda', component: OdezhdaComponent},
  {path: 'tehnika', component: TehnikaComponent},
  {path: 'odezhda1', component: Odezhda1Component},
  {path: 'odezhda2', component: Odezhda2Component},
  {path: 'odezhda3', component: Odezhda3Component},
  {path: 'odezhda4', component: Odezhda4Component},
  {path: 'odezhda5', component: Odezhda5Component},
  {path: 'tehnika1', component: Tehnika1Component},
  {path: 'tehnika2', component: Tehnika2Component},
  {path: 'tehnika3', component: Tehnika3Component},
  {path: 'tehnika4', component: Tehnika4Component},
  {path: 'tehnika5', component: Tehnika5Component}
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    KontaktiComponent,
    MainscreenComponent,
    DomComponent,
    OsnovaComponent,
    OdezhdaComponent,
    TehnikaComponent,
    Odezhda1Component,
    Odezhda2Component,
    Odezhda3Component,
    Odezhda4Component,
    Odezhda5Component,
    Tehnika1Component,
    Tehnika2Component,
    Tehnika3Component,
    Tehnika4Component,
    Tehnika5Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
