import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getUser(username){
    const promise = new Promise((resolve, reject) => {
      resolve(firstValueFrom(this.http.get(`https://api.github.com/users/${username}`)))
    })
    return promise;
  }
}
