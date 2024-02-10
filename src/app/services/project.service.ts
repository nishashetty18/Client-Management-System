import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../class/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
url='http://localhost:3000/Project';
  constructor(private http:HttpClient) { }
  getallproject(){
    return this.http.get(this.url);
  }
  deleteEachProject(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
  getprojectbyid(id:Number):Observable<Object>{
  return this.http.get<Project>(`${this.url}/${id}`);
  }
  updateprojectdata(id:Number,data:any){
  return this.http.put(`${this.url}/${id}`,data);
}
saveprojectdata(data:any){
  return this.http.post(this.url,data);
}
}