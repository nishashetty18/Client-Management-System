import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
private url='http://localhost:3000/Meeting'
  constructor(private http:HttpClient) { }
  getallmeeting(){
    return this.http.get(this.url);
  }
  savemeetingdata(data:any){
    return this.http.post(this.url,data);
  }
  deleteEachmeeting(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
}
