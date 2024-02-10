import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/services/meeting.service';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
  constructor(private meetingsystem:MeetingService){}
  meetingData:any=[];
  
  addmeeting=new FormGroup({
    id:new FormControl(''),
    topic:new FormControl(''),
    peopleno:new FormControl(''),
    start_date_time:new FormControl(''),
    status:new FormControl(''),
    cid:new FormControl('',)
 
    
});
msg:boolean=false;
  ngOnInit(): void {
    this.meetingsystem.getallmeeting().subscribe((result:any)=>{
      console.log(result);
      this.meetingData=result;
  
    });
  }deleteEachmeeting(id: any) {
    this.meetingsystem.deleteEachmeeting(id).subscribe((result) => {
  
      this.ngOnInit();
      
    });
  }
  savedata(){
    this.meetingsystem.savemeetingdata(this.addmeeting.value).subscribe((result)=>{
      //console.log(result);
      this.msg=true;
      this.addmeeting.reset({});
    });
 
  }
  removemsg(){
    this.msg=false;
  
  }
}

