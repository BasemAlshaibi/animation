import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[ 


    trigger('routeAnimations', [
     
     transition( '* => *', [
//ثلاثة الامور التالية ستنفذ بالتسلسل عند كل انتقال بين اثنين كومبنتس
     query(':enter',  [   style({ opacity: 0 })],{ optional: true }),

     query(':leave',[   style({ opacity: 1 }),animate('0.5s', style({ opacity: 0 }))  ],{ optional: true }),


      query(':enter',[style({ opacity: 0 , transform: ' translateX(-100%)' }),animate('0.5s', style({ opacity: 1 , transform: ' translateX(0)' }))],{ optional: true }),


  ])


 /*
      transition('* <=> *', [
        // Set a default  style for enter and leave
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: ' translateX(-100%)',
          }),
        ]),
        // Animate the new page in
        query(':enter', [
          animate('600ms ease', style({ opacity: 1, transform: '  translateX(0)' })),
        ])
      ]),
*/

    ])

   

  
  ]
  
  
})

export class AppComponent {
  title = 'animation';

 
prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
}
}
