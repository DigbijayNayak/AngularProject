import { Component, OnInit } from '@angular/core';
import { EducationDetails } from './educationDetails';
import { UserAddress } from './userAddress';
import { UserProfile } from './userProfile';

declare var $:any;
declare const readURL: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userobj:UserProfile=new UserProfile();
  addressobj: UserAddress = new UserAddress();
  eduObj: EducationDetails = new EducationDetails();
  educationData: any = [];
  localData: any;
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
  exams: any = [
    {name: "10th"},
    {name: "12th"},
    {name: "Graduation"},
    {name: "Master"},
  ]
  constructor() { 
    this.addressobj.ccountry = "null";
    this.addressobj.cstate = "null";
    this.addressobj.ccity = "null";
    this.userobj.gender = "null";
    this.userobj.caste = "null";
    this.eduObj.examType = "null";
  }

  ngOnInit(): void {
    // this.userobj.country = "null";
    this.localData =  localStorage.getItem("token");
  }
  readURL(){
    readURL();
  }
  // onAdd(){
  //   this.router.navigate()
  // }

  onSubmit()
  {
    // this.title = 'Hello';
    // localStorage.setItem("token", this.title);
    // localStorage.setItem("token", JSON.stringify(this.userobj));
    // localStorage.setItem("token", JSON.stringify(this.addressobj));
    console.log(this.userobj);
    console.log(this.addressobj);
  }
  onModalSubmit(details: EducationDetails){
    localStorage.setItem("token", JSON.stringify(details));
    this.educationData.push(details);
    console.log(this.educationData);
    console.log(this.localData);
    // console.log(details);
    // console.log(this.eduObj);
    $('#educationalModal').modal('hide');
  }
  onClickAdd(){
    $('#educationalModal').modal('show');
  }
  onClickCancel(){
    $('#educationalModal').modal('hide');
  }
  onDeleteItem(item:any){
    this.educationData.splice(item, 1);
  }
}


