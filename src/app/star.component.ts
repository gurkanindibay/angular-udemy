import {Component} from '@angular/core';


enum StarState {ON = 1, OFF = 2 };

@Component({
  selector: 'star',
  templateUrl: 'app/star.component.html'
})

export class StarComponent {

  state: StarState = StarState.OFF;
  StarState: typeof StarState = StarState;

  onClick() {
    if (this.state === StarState.OFF) {
      this.state = StarState.ON;
    } else {
      this.state = StarState.OFF;
    }
  }

}


