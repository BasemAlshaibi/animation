import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-muti-state',
  templateUrl: './muti-state.component.html',
  styleUrls: ['./muti-state.component.css'],
  animations: [


    trigger('photoState', [
    
      
      state('move',style({transform: 'translateX(-100%)'})),
      state('enlarg',style({transform: 'scale(1.5)'})),
      state('spin',style({transform: 'rotateY(180deg) rotateZ(90deg)'})),

 

      transition('* => *', [  animate('600ms ease' )]),

 
    ])

  ]


})
export class MutiStateComponent implements OnInit {

  constructor() { }

  postion:string;
  photoUrl="https://upload.wikimedia.org/wikipedia/commons/c/c3/Emmanuel_Macron_%28cropped%29.jpg"


changePostion(newP){
  this.postion=newP
}

  ngOnInit() {
  }

}
