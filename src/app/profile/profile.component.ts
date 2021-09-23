import { Component, OnInit } from '@angular/core';
import { UserProfile } from './userProfile';

declare const readURL: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userobj:UserProfile=new UserProfile();
  constructor() { }

  ngOnInit(): void {
    
  }
  readURL(){
    readURL();
  }


  onSubmit()
  {
    console.log(this.userobj);
  }

}


