import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'intefaces/userProfile';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'mcp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private profile: UserService, private router: Router) { }
  isEditMode=false;
  userProfile:any=null;
  ngOnInit(): void {
    this.profile.getProfile().subscribe((data: any)=>{
      this.userProfile= data
      
      if(this.userProfile.profilePic ===null || this.userProfile.profilePic ===""){
        this.userProfile.profilePic="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
      }
      
    })
    
  }

  editUserProfile(){
    this.isEditMode= true;

  }

  saveUserProfile(){
    this.profile.updateProfile(this.userProfile)
    this.isEditMode=false;
  }

  cancel(){
    this.isEditMode=false;
    this.router.navigateByUrl("/profile")
  }

  workInProgress(){
    alert("This functionality is still in progress.")
  }
}
