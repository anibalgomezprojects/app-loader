import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor() { }

  @Input() theme;

  barPercent = 0;
  barFill = 1;
  barTime =  10;

  ngOnInit() {
    setInterval(() => {
      if (this.barPercent < 100) {
        this.barPercent = this.barPercent + this.barFill;
      } else {
        this.barPercent = 100;
      }
    }, this.barTime);
  }


}
