import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-pop-over-custom-state',
  templateUrl: './pop-over-custom-state.component.html',
  styleUrls: ['./pop-over-custom-state.component.css'],
  animations: [


    trigger('popOverState', [

      state('show',style({opacity: 1})),
      state('hide',style({opacity: 0})),

      transition('show=>hide', [ animate('600ms ease-out')]),
      transition('hide => show', [  animate('600ms ease-in' )]),




    ])

    ]
})
export class PopOverCustomStateComponent implements OnInit {

  constructor() { }

  show = false;

  get popState(){return this.show ? 'show' : 'hide'  }

  
  toggle(){
    this.show = !this.show
  }

  ngOnInit() {
  }

}
