export class Task {
    
        id:number=0;
        name:string="";
        discription:string="";
        pid:string="";
        
        constructor(tid:number,tname:string,tdiscription:string,cid:string,){
            this.id=tid;
            this.name=tname;
            this.discription=tdiscription;
            this.pid=cid;
           
        }
    }

