import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
 
  title = 'clientsystem';
  navbar1:boolean=false;
 
  constructor(private router:Router){}
  ngDoCheck(): void {
    let url=this.router.url;
    console.log(url);
    
    if(url=="/clientinfo"||url=="/projectinfo"||url=="/projecttask"||url=="/meeting"||url=="/home"){
      this.navbar1=true;
      
    }
    else{
      this.navbar1=false;
    }
  
    
 
}
}
