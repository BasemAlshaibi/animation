import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-stagger-animations',
  templateUrl: './stagger-animations.component.html',
  styleUrls: ['./stagger-animations.component.css'],
  animations: [
 
    trigger('listAnimation0', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),

          query(':leave', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
      ]),
    ]),
 
    // طريقة افضل في الترتيب

trigger('listAnimation1', [
  transition('* => *', [

 
    query(':enter', [style({ opacity: 0 }), stagger('300ms', animate('1s ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
      ])) )], {optional: true}),

      query(':leave', stagger('300ms', [
        animate('1s ease-in', keyframes([
          style({opacity: 1, transform: 'translateY(0)', offset: 0}),
          style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
          style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
        ]))]), {optional: true})
  ]),
]),

    trigger('listAnimation2', [
      transition('* <=> *', [

        query(':enter', [style({ opacity: 0 }) , stagger('500ms',  animate('1000ms ease-out', style({ opacity: 1 })))], { optional: true } ),

        query(':leave',  animate('200ms', style({ opacity: 0 })),          { optional: true}        )
      ])
    ])

    ,

    trigger('explainerAnim', [
      transition('* => *', [
        query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),

        query('.col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),
        query('.col', [
          animate(1000, style('*'))
        ])
      
        
      ])
    ])

  ]
})
export class StaggerAnimationsComponent implements OnInit {

  Items: any[] = [

    "sleep at 8 oclock",
    "call to friend",
    "go to shoping"

  ]
  public newItem;


  constructor() { }


  ngOnInit() {


  }

  public addItem() {
    if (this.newItem == '') {
    }
    else {
      this.Items.push(this.newItem);
      this.newItem = ""
    }
  }

  public deleteTask(indx) {
    this.Items.splice(indx, 1);
  }

}
