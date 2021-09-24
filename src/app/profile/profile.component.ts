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
  userProfile: UserProfile[] = [];
  country:any=[{name:'India'},
  {name:'Pakistan'},
  {name:'China'},
  {name: 'Russia'},
  {name:'USA'}];

  states: any = [
    {name:'Odisha'},
    {name:'Assam'},
    {name:'Bihar'},
    {name:'Goa'},
    {name:'Kerala'}
  ];
  cities: any = [
    {name:'BBSR'},
    {name:'Kolkata'},
    {name:'Cuttack'},
    {name:'Delhi'},
    {name:'Mumbai'},
    {name:'Bangalore'}
  ];
  genders: any = [
    {name:'Male'},
    {name:'Female'}
  ]
  castes: any = [
    {name:"SC"},
    {name:"ST"},
    {name:"OBC"},
    {name:"General"}
  ]
  constructor() { 
    this.userobj.country = "null";
    this.userobj.state = "null";
    this.userobj.city = "null";
    this.userobj.gender = "null";
    this.userobj.caste = "null";
  }

  ngOnInit(): void {
    // this.userobj.country = "null";
  }
  readURL(){
    readURL();
  }


  onSubmit()
  {
    console.log(this.userobj);
  }

}


