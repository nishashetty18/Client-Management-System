export class Project {
    id:number=0;
    name:string="";
    duration:string="";
    cid:number=0;
    
    constructor(pid:number,pname:string,pduration:string,cid:number){
        this.id=pid;
        this.name=pname;
        this.duration=pduration;
        this.cid=cid;
        
    }
}
