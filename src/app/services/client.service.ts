import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../class/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
private url='http://localhost:3000/client';
  constructor(private http:HttpClient) { }
  getallclient(){
    return this.http.get(this.url);
  }
  saveclientdata(data:any){
    return this.http.post(this.url,data);
  }
  deleteEachClient(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
  getclientbyid(id:Number):Observable<Object>{
    return this.http.get<Client>(`${this.url}/${id}`);
  }
  updateclientdata(id:Number,data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }
}

