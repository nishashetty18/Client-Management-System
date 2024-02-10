import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectinfoComponent } from './dashboard/projectinfo/projectinfo.component';
import { LoginComponent } from './dashboard/login/login.component';
import { ClientinfoComponent } from './dashboard/clientinfo/clientinfo.component';
import { ClientregisterComponent } from './dashboard/clientregister/clientregister.component';
import { ClienteditComponent } from './dashboard/clientedit/clientedit.component';

import { ProjecteditComponent } from './dashboard/projectedit/projectedit.component';
import { ProjecttaskComponent } from './dashboard/projecttask/projecttask.component';

import { MeetingComponent } from './dashboard/meeting/meeting.component';
import { SingleprojectComponent } from './dashboard/singleproject/singleproject.component';
import { HomeComponent } from './dashboard/home/home.component';
import { MainpageComponent } from './dashboard/mainpage/mainpage.component';



const routes: Routes = [
  {path:"",component:MainpageComponent},
  {path:"projecttask",component:ProjecttaskComponent},
  {path:"projectinfo",component:ProjectinfoComponent},
  {path:"login",component:LoginComponent},
  {path:"clientinfo",component:ClientinfoComponent},
  {path:"clientregister",component:ClientregisterComponent},
  {path:"clientedit/:id",component:ClienteditComponent},
  {path:"projectedit/:id",component:ProjecteditComponent},
  {path:"meeting",component:MeetingComponent},
  {path:"singleproject",component:SingleprojectComponent},
  {path:"home",component:HomeComponent},
  {path:"mainpage",component:MainpageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
