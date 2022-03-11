import { Component, OnInit } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-change-div-size',
  templateUrl: './change-div-size.component.html',
  styleUrls: ['./change-div-size.component.css'],
  animations: [
    trigger('changeDivSize', [

      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
    
    trigger('balloonEffect', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ]),
  ]
})
export class ChangeDivSizeComponent implements OnInit {

  currentState = 'initial';

changeState() {
  this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
}
  
  
  constructor() { }

  ngOnInit() {
  }

}
