import { Component } from '@angular/core';
import { Client } from 'src/app/class/client';
import { Project } from 'src/app/class/project';
import { ProjectService } from 'src/app/services/project.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-singleproject',
  templateUrl: './singleproject.component.html',
  styleUrls: ['./singleproject.component.scss']
})
export class SingleprojectComponent {
    projectdata:any=[];
    stdname:any="";
    stdid:any="";
    std:Project=new Project(0,"","",0);
    clientProject:any[]=[];
    constructor(private projectsystem:ProjectService){}
    ngOnInit(): void {
      this.stdname=sessionStorage.getItem('user');
      this.stdid=sessionStorage.getItem('id');
      
      this.projectsystem.getallproject().subscribe((result)=>{
        this.projectdata=result;
        console.log(this.projectdata);
        
        
        for(let project of this.projectdata) {
          if(project.cid == this.stdid) {
            this.clientProject.push(project);
          }
        }
        console.log(this.clientProject);
      })
      // this.projectsystem.getprojectbyid(this.stdid).subscribe((result:any)=>{
      //   this.std=result;
      //   console.log(result);
       
    
        
      // });

    }
  }

