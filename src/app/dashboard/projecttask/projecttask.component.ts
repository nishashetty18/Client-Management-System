import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-projecttask',
  templateUrl: './projecttask.component.html',
  styleUrls: ['./projecttask.component.scss']
})
export class ProjecttaskComponent implements OnInit{
constructor(private tasksystem:TaskService){}
taskData:any=[];
  addtask=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    discription:new FormControl(''),
    pid:new FormControl(''),
  
  
  
  });
  msg:boolean=false;
  ngOnInit(): void {

  
  this.tasksystem.getalltask().subscribe((result:any)=>{
    console.log(result);
    this.taskData=result;

  });
}

  savedata(){
    this.tasksystem.savetaskdata(this.addtask.value).subscribe((result:any)=>{
      //console.log(result);
      this.msg=true;
      this.addtask.reset({});
    });
}

deleteEachtask(id:any) {
  this.tasksystem.deleteEachtask(id).subscribe((result) => {

    this.ngOnInit();
  });
}
removemsg(){
  this.msg=false;
}
}


