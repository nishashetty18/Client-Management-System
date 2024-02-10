import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-projectedit',
  templateUrl: './projectedit.component.html',
  styleUrls: ['./projectedit.component.scss']
})
export class ProjecteditComponent {
  constructor(private projectsystem:ProjectService,private route:ActivatedRoute){}
    editproject:any= new FormGroup({
    
      name:new FormControl(''),
      duration: new FormControl(''),
      cid: new FormControl(''),
      
  });
  msg:boolean=false;
  ngOnInit(): void {
    this.projectsystem.getprojectbyid(this.route.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result);
      this.editproject= new FormGroup({
        name:new FormControl(result['name']),
        duration:new FormControl(result['duration']),
        cid:new FormControl(result['cid']),
       
    });
    
    });
  }
  updatedata(){
    //console.log(this.editstudent.value)
    this.projectsystem.updateprojectdata(this.route.snapshot.params['id'],this.editproject.value).subscribe((result:any)=>{
      //console.log(result);
      this.msg=true;
      
    });
  }
removemsg(){
  this.msg=false;
}

}
