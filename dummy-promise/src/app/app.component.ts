import { Component } from '@angular/core';
import { User } from './user';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
  apiService:ApiService;

  constructor(apiservice:ApiService){
    this.apiService = apiservice
    this.user = new User('','','', new Date())
    this.getInfo()
  }

  getInfo() {
    this.apiService.getUser('Clinton-dev').then((data:any)=>{
      this.user.name = data.name;
      this.user.avatar_url = data.avatar_url;
      this.user.created_at = data.created_at;
      this.user.html_url = data.html_url;

    })
  }

  
}
