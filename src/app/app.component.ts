import { Component } from '@angular/core';
import UsersJson from './users.json';

interface USERS{
  id: number;
  name: String;
  lastname: string;
  email: String;
  gender: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
Users:USERS[]=UsersJson;
constructor(){

  console.log(this.Users);

}
}



