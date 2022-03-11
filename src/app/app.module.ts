import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoshToDoListComponent } from './mosh-to-do-list/mosh-to-do-list.component';
import { PopOverCustomStateComponent } from './pop-over-custom-state/pop-over-custom-state.component';
import { MutiStateComponent } from './muti-state/muti-state.component';
import { KeysframeComponent } from './keysframe/keysframe.component';
import { StaggerAnimationsComponent } from './stagger-animations/stagger-animations.component';
import { ChangeDivSizeComponent } from './change-div-size/change-div-size.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MoshToDoListComponent,
    PopOverCustomStateComponent,
    MutiStateComponent,
    KeysframeComponent,
    StaggerAnimationsComponent,
    ChangeDivSizeComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
