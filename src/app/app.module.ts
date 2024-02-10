import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjectinfoComponent } from './dashboard/projectinfo/projectinfo.component';
import { LoginComponent } from './dashboard/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientinfoComponent } from './dashboard/clientinfo/clientinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientregisterComponent } from './dashboard/clientregister/clientregister.component';
import { ClienteditComponent } from './dashboard/clientedit/clientedit.component';

import { ProjecteditComponent } from './dashboard/projectedit/projectedit.component';
import { ProjecttaskComponent } from './dashboard/projecttask/projecttask.component';
import { MeetingComponent } from './dashboard/meeting/meeting.component';
import { SingleprojectComponent } from './dashboard/singleproject/singleproject.component';
import { HomeComponent } from './dashboard/home/home.component';
import { MainpageComponent } from './dashboard/mainpage/mainpage.component';





@NgModule({
  declarations: [
    AppComponent,
   
    ProjectinfoComponent,
    LoginComponent,
    ClientinfoComponent,
    ClientregisterComponent,
    ClienteditComponent,
   
    ProjecteditComponent,
        ProjecttaskComponent,
        MeetingComponent,
        SingleprojectComponent,
        HomeComponent,
        MainpageComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
