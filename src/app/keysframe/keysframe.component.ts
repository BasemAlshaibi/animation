import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-keysframe',
  templateUrl: './keysframe.component.html',
  styleUrls: ['./keysframe.component.css'],
  animations: [


    trigger('photoState', [
    
      
      state('move',style({transform: 'translateX(-100%)'})),
      state('enlarg',style({transform: 'scale(1.5)'})),
      state('spin',style({transform: 'rotateY(180deg) rotateZ(90deg)'})),


      transition('* => move', [  animate(2000,keyframes([
        style({transform: 'translateX(0%) rotateY(0)  ' , offset:0}),
        style({transform: 'translateX(50%) rotateY(90deg)', offset:0.33}),
        style({transform: 'translateX(-75%) rotateY(180deg)', offset:0.66}),
        style({transform: 'translateX(-100%)' , offset:1}),

        
      ]) )]),
      transition('* => *', [  animate('600ms ease')]), 

 
    ])

  ]

})
export class KeysframeComponent implements OnInit {

  constructor() { }

  
  postion:string;
  photoUrl="https://upload.wikimedia.org/wikipedia/commons/c/c3/Emmanuel_Macron_%28cropped%29.jpg"


changePostion(newP){
  this.postion=newP
}
  ngOnInit() {
  }

}
