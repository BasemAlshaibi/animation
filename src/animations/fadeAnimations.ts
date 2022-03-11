import { trigger, transition, query, style, stagger, animate } from "@angular/animations";

export const fadeAnimation = trigger('fade', [


        transition('* => *', [
   
            query(':enter',  [ style({ opacity: 0 , transform: 'translateX(-100px)' }) ,
              stagger('500ms',  animate('1000ms ease-out') )
              ] ,   { optional: true } ), 
         
           query(':leave',       stagger('500ms',  animate('1000ms ease-out' , style({ opacity: 0 , transform: 'translateX(-100px)' }) ,) )
          ,   { optional: true } ), 
         
         
         
         ]),


    ])


