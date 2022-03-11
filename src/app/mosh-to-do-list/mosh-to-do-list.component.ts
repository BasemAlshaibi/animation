import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state, group, sequence, query, keyframes, stagger } from '@angular/animations';
import { fadeAnimation } from 'src/animations/fadeAnimations';

@Component({
  selector: 'app-mosh-to-do-list',
  templateUrl: './mosh-to-do-list.component.html',
  styleUrls: ['./mosh-to-do-list.component.css'],
  animations: [

 
// دالة الترايجر هي الحاوية لكل الدوال ولها اسم مميز يربط بعنصر الهتمل اللي ستطبق عليه الانميشن
    trigger('fade', [

       //////////////////////////////////// الكود الأول/////////////////////////////////// 

 
/*

// الدالة ترانسيشن تضم برميترين الاول مسار الحركة من إلى
//والبرميتر الثاني يحوي التنسيق الاولي بالاستايل ودالة الانميشن
//دالة الانميشن لها برميترين البرميتر الاول زمن الانميشن والثاني الاستايل النهائي اللي ح توصل له
      transition('void=>*', [
        style({opacity: 0,backgroundColor:'yellow'}),
        animate(2000,style({opacity: 1,backgroundColor:'blue'}),)
      ]),


      transition('*=>void', [
        style({opacity: 1,backgroundColor:'yellow'}),
        animate(2000,style({opacity: 0,backgroundColor:'blue'}),)
      ]),
      */

 ////////////////////////////////////  االكود الثاني المحسن/////////////////////////////////// 
/*
  
     // بما انه الحركة تذهب الى العدم فلا حاجة لتنسيق ستايل ختامي بدالة الانميت

             transition('void=>*', [
              style({opacity: 0}),
              animate(2000)
            ]),

    //بالمثل بما نه انه الحركة جاية من العدم فلا حاجة لتنسيق ستايل أولي
            transition('* => void', [
              animate(2000, style({opacity: 0}) )
            ]),
   */ 
      /*

//////////////////////////////////// الكود الثالث المحسن اكثر/////////////////////////////////// 
// بما انه الاستايل   الاولي واللي تذهب اليه متساويه اي  الفويد

      state('void',style({opacity: 0})),
      
      transition('void=>*', [ animate(2000)]),
      transition('* => void', [  animate(2000 )]),
      
      */
      /*


        /*
 //////////////////////////////////// الكود الرابع المحسن والمختصر/////////////////////////////////// 
// لان الحركتين دخول وخروج بنفس الزمن فنقدر نختصر دالتي الترانسيشن بدالة واحدة
     state('void',style({opacity: 0})),
     
     transition('void=>*,*=>void', [ animate(2000)]),
     
     */
    /*  
      ////////////////////////////////////  الكود الخامس المحسن والمختصر اكثر/////////////////////////////////// 
// نقدر نستعيض بدل الاسهم باسماء معرفة مسبقة للحركات تمثلها على النحو التحالي

 
      state('void',style({opacity: 0})),
      
      transition(':enter,:leave', [ animate(2000)]),
      

*/

/*
      ////////////////////////////////////  الكود السادس المحسن والمختصر اكثر كمان/////////////////////////////////// 
// هنا ندمج مسار الحركة بالسهم المزدوج
      state('void',style({opacity: 0})),
      
      transition('void<=>*', [ animate(2000)]),
      
  

 
     */
     /*
      ////////////////////////////////////  الكود السابع لكيف نستخدم الكي فريمس والاوفيست /////////////////////////////////// 
// استخدمنا هنا تايمنج غير رقمي مع طريق الجراف بطريقة الموشن
    transition('void  => *',  animate('2s ease-in', keyframes([
      style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
      style({opacity: .5, transform: 'translateX(75px)',  offset: 0.3}),
      style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
    ]))
    ),

    transition('*  => void',  animate('2s ease-in', keyframes([
      style({opacity: 1, transform: 'translateX(0)', offset: 0}),
      style({opacity: .5, transform: 'translateX(75px)',  offset: 0.3}),
      style({opacity: 0, transform: 'translateX(-75%)',     offset: 1.0}),
    ]))
    ),
  
*/
/*
      ////////////////////////////////////  الكود الثامن لكيف نستخدم الجروب لتنفيذ الحركة بالتوازي  /////////////////////////////////// 

   
transition('void => *', [

  style({  transform: 'translateX(50px)', opacity: 0 }),
 
    group([

    animate('4s ease', style({
      opacity: 1
    })),

    animate('3s 0.1s ease', style({
      transform: 'translateX(0)',
     })),

    ])
  
]),
    

 
*/

 /*

       ////////////////////////////////////  الكود الثامن لكيف  نصل لعنصر داخل عنصر معمول له انميشن عبر الكويري  /////////////////////////////////// 
//العنصر سبان معمول له كلاس باسم انر
transition('void => *', [

  group([
  style({ opacity: 0 , transform: 'translateX(-100px)' }),
   animate(3000),
   //ماسبق يخص الحاوية وكل عناصرها بما يشمل الاسبان كذلك واللي تحت يخص الاسبان فقط والتنفيذ هنا متسلسل وليس متوازي
   query('.inner',  [ style({  opacity: 0 }) ,animate(3000  )]),
  ])
 
]),

transition('* => void', [
  animate(3000, style({ transform: 'translateX(100%)' })),
  query('.inner',  animate(3000 ,style({  opacity: 0 })  )),

])

*/
 //////////////////////////////////// الكود التاسع لمعرفة الستيجر     /////////////////////////////////// 

 
transition('* => *', [
   
   query(':enter',  [ style({ opacity: 0 , transform: 'translateX(-100px)' }) ,
     stagger('500ms',  animate('1000ms ease-out') )
     ] ,   { optional: true } ), 

  query(':leave',       stagger('500ms',  animate('1000ms ease-out' , style({ opacity: 0 , transform: 'translateX(-100px)' }) ,) )
 ,   { optional: true } ), 



]),
 
 /*
  
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
   
 */
  
 
 
    ]
    )
  ]
})
export class MoshToDoListComponent implements OnInit {

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

  public deleteItem(indx) {
    this.Items.splice(indx, 1);
  }

}
