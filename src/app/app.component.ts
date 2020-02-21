import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  cal_string = '';

  addStr($event) {

    if(this.cal_string === "ERROR") {
      this.cal_string = '';
    }

    this.cal_string += $event.target.textContent;
  
  }

  calculation() {
    try{
      let result = eval(this.cal_string);
      this.cal_string = result;
    } catch(SyntaxError) {
      this.cal_string = "ERROR";
    }
  }

  remove() {
    this.cal_string = '';
  }
}
