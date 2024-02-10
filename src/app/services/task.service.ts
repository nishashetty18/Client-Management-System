import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private url='http://localhost:3000/ProjectTask';
  constructor(private http:HttpClient) { }
  getalltask(){
    return this.http.get(this.url);
  }
  savetaskdata(data:any){
    return this.http.post(this.url,data);
  }
    deleteEachtask(id:any){
      return this.http.delete(`${this.url}/${id}`);
}
}

