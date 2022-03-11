import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { MoshToDoListComponent } from './mosh-to-do-list/mosh-to-do-list.component';
import { ChangeDivSizeComponent } from './change-div-size/change-div-size.component';
import { PopOverCustomStateComponent } from './pop-over-custom-state/pop-over-custom-state.component';
import { MutiStateComponent } from './muti-state/muti-state.component';
import { keyframes } from '@angular/animations';
import { KeysframeComponent } from './keysframe/keysframe.component';
import { StaggerAnimationsComponent } from './stagger-animations/stagger-animations.component';


const routes: Routes = [

  { path: '',   redirectTo: '/about', pathMatch: 'full' },  
  { path: 'about', component: AboutComponent , data: {animation: 'aboutPage'} },
  { path: 'login', component: LoginComponent , data: {animation: 'loginPage'} },
  { path: 'contact', component: ContactComponent , data: {animation: 'contactPage'}  },
  { path: 'todo', component: MoshToDoListComponent   },
  { path: 'pop', component: PopOverCustomStateComponent   },

  { path: 'changeSize', component: ChangeDivSizeComponent   },
  { path: 'multiState', component: MutiStateComponent   },
  { path: 'Keyframes', component: KeysframeComponent   },
  { path: 'stagger', component: StaggerAnimationsComponent   },






];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
