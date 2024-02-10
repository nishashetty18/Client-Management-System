import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { MeetingService } from 'src/app/services/meeting.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private clientsystem:ClientService,private router:Router,private projectsystem:ProjectService,private meetingsystem:MeetingService){}
  clientData:any=[];
  projectdata:any=[];
  meetingData:any=[];
  
  ngOnInit(): void {
    this.clientsystem.getallclient().subscribe((result:any)=>{
      console.log(result);
      this.clientData=result;
  
    });
    this.projectsystem.getallproject().subscribe((result)=>{
      this.projectdata=result;
      });
    
    this.meetingsystem.getallmeeting().subscribe((result:any)=>{
      console.log(result);
      this.meetingData=result;
  
    });
  }
}
  

