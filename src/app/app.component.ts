import { Component } from '@angular/core';

import { Hero } from './hero/hero';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero = {
    id: 1,
    name: 'Windstorm'
  };
}