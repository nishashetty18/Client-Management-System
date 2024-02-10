import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html',
  styleUrls: ['./projectinfo.component.scss']
})
export class ProjectinfoComponent implements OnInit {
  constructor( private projectsystem:ProjectService){}
  projectdata:any=[];
  addproject=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    duration:new FormControl(''),
    cid:new FormControl(''),
    
});
msg:boolean=false;
  ngOnInit(): void {
    this.projectsystem.getallproject().subscribe((result)=>{
    this.projectdata=result;
    });
  }
  deleteEachProject(id: any) {
    this.projectsystem.deleteEachProject(id).subscribe((result) => {
  
      this.ngOnInit();
    });
  }
  savedata(){
    this.projectsystem.saveprojectdata(this.addproject.value).subscribe((result)=>{
      //console.log(result);
      this.msg=true;
      this.addproject.reset({});
    });
}removemsg(){
  this.msg=false;

}
}
