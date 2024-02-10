  import { Component, OnInit } from '@angular/core';
  import { FormControl,FormGroup } from '@angular/forms';
  import { ClientService } from 'src/app/services/client.service';
  
  import { ActivatedRoute } from '@angular/router';
  
  
  @Component({
    selector: 'app-clientedit',
    templateUrl: './clientedit.component.html',
    styleUrls: ['./clientedit.component.scss']
  })
  export class ClienteditComponent implements OnInit{
  constructor(private clientsystem:ClientService,private route:ActivatedRoute){}
    editclient:any= new FormGroup({
    
      name:new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
  });
  msg:boolean=false;
  ngOnInit(): void {
    this.clientsystem.getclientbyid(this.route.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result);
      this.editclient= new FormGroup({
        name:new FormControl(result['name']),
        address:new FormControl(result['address']),
        email:new FormControl(result['email']),
        password:new FormControl(result['password']),
    });
    
    });
  }
  updatedata(){
    //console.log(this.editstudent.value)
    this.clientsystem.updateclientdata(this.route.snapshot.params['id'],this.editclient.value).subscribe((result:any)=>{
      //console.log(result);
      this.msg=true;
      
    });
    
  }removemsg(){
    this.msg=false;
  }

  }