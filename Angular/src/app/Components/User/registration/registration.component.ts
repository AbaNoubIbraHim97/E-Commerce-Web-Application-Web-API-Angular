import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/ViewModel/Classes/Interfaces/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user:User;
  constructor(private userserve:UserService,private route:Router) { 
this.user={
  Name:'',
  Password:'',
  confirmPassword:''

};
  }

  ngOnInit(): void {
    console.log(this.user)
  }
adduser(){
  this.userserve.registeration(this.user).subscribe(
    (Response)=>{
      console.log("registration Success");
      this.route.navigate(['/ApiProducts']);
    },
  err=>{
    console.log(err);
  }
  )

}
}
