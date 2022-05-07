import { Component } from '@angular/core';
import { User } from './user';
import { ApiService } from './api.service';
import { FormControl } from '@angular/forms';
import { Repo } from './repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
  apiService:ApiService;
  username = new FormControl("")
  repos:Repo[] = [];

  constructor(apiservice:ApiService){
    this.apiService = apiservice
    this.user = new User('','','', new Date())
    
  }
search() {
  console.log(this.username.value)
  this.getInfo(this.username.value)
  this.getInfoRepos(this.username.value)
  
}

  getInfo(username:string) {
    this.apiService.getUser(username).then((data:any)=>{
      this.user.name = data.name;
      this.user.avatar_url = data.avatar_url;
      this.user.created_at = data.created_at;
      this.user.html_url = data.html_url;

    })
  }

  getInfoRepos(username:string) {
    this.apiService.getRepo(username).then((data:any)=>{
      console.table(data)
      for (let i = 0;i<=data.length;i ++){
          let info = new Repo (data[i].name,data[i].html_url,data[i].description)
          this.repos.push(info)
        }

    })
  }



  
}
