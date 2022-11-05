import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { first } from 'rxjs';
import { JwtToken } from 'src/app/auth/models/jwtToken.model';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isSubmitted:boolean = false;
  loginModel:any;
  submitted = false;
  loading = false;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authenticationService: AuthenticationService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    //login function
  login(){
    if(this.loginForm.valid==true){
      this.router.navigate(['/navigator']);
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loginModel = {
      "userName":this.loginForm.get('username').value,
      "password" : this.loginForm.get('password').value,
    //  "companyCode": this.loginForm.companyCode.value
    };

      this.loading = true;
      this.authenticationService.signIn(this.loginModel)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;

          var jwtToken = new JwtToken();
          jwtToken.loadTokenFronJwt(data,true);
          this.authenticationService.setUserToken(jwtToken);

          let tokenInfo = this.getDecodedAccessToken(JSON.stringify(jwtToken));
          // console.log("tokenInfo" + JSON.stringify(tokenInfo));


          var userRole:string[] = tokenInfo['authorities'];
          var clientId:string[] = tokenInfo['client'];
          var clientId12 = clientId['id'];
          var userId:any = tokenInfo['id'];
          var user:any = tokenInfo['user_name'];
          var clientLegalName:any = tokenInfo['client'];
          var legalName:any = clientLegalName['legalName'];
          // console.log(JSON.stringify(userRole[1]));
          // console.log("Client "+JSON.stringify(clientId));
          // console.log("Client Id "+JSON.stringify(clientId12));
          // console.log("User Id "+JSON.stringify(userId));
          // console.log("User name "+JSON.stringify(user));
          //set roles in local storage
          localStorage.setItem('roles', JSON.stringify(userRole[1]));
          localStorage.setItem('client', JSON.stringify(clientId));
          localStorage.setItem('clientid', JSON.stringify(clientId12));
          localStorage.setItem('userid', JSON.stringify(userId));
          localStorage.setItem('username', JSON.stringify(user));
          localStorage.setItem('legalname', JSON.stringify(legalName))

          let navigationExtras: NavigationExtras = {
            queryParams: {
              userId,clientId,userRole
            }
          }

          let dashboardUrl = "";
          userRole.forEach(r => {
            if (r && r == "ROLE_ROOT") {
              dashboardUrl='/dashboard/super';

            } else if (r && r == "ROLE_OWNER") {
              dashboardUrl='/dashboard/admin';

            } else if (r && r == "ROLE_NORMAL_USER") {
              dashboardUrl='/normaluser/userprofile';

            } else if (r && r == "ROLE_DRIVER") {
              dashboardUrl='/dashboard/admin';

            } else if(r && r == "ROLE_WAREHOUSE"){
              dashboardUrl='/parcel/parcelDashboard';

            } else if(r && r == "ROLE_BRANCH_SUPERVISOR"){
              dashboardUrl='/parcel/parcelDashboard';
            }
          });

          this.router.navigate([dashboardUrl]);
        },
        error => {
          this.loading = false;
         // this.toastr.error(error, 'Authentication Failed');
        });
}

check(token){
  let tokenInfo = this.getDecodedAccessToken(token);
  // console.log("tokenInfo" + JSON.stringify(tokenInfo));
  var userRole:string[] = tokenInfo['authorities'];
  var clientId:string[] = tokenInfo['client'];
  var clientId12 = clientId['id'];
  var userId:any = tokenInfo['id'];
  var user:any = tokenInfo['user_name']

  // console.log(JSON.stringify(userRole[1]));
  // console.log("Client "+JSON.stringify(clientId));
  // console.log("Client Id "+JSON.stringify(clientId12));
  // console.log("User Id "+JSON.stringify(userId));
  // console.log("User name "+JSON.stringify(user));

  //set roles in local storage
  localStorage.setItem('roles', JSON.stringify(userRole[1]));
  localStorage.setItem('client', JSON.stringify(clientId));
  localStorage.setItem('clientid', JSON.stringify(clientId12));
  localStorage.setItem('userid', JSON.stringify(userId));
  localStorage.setItem('username', JSON.stringify(user));

      let navigationExtras: NavigationExtras = {
        queryParams: {
          userId,clientId,userRole
        }
      }

      let dashboardUrl = "";
      userRole.forEach(r => {
        if (r && r == "ROLE_ROOT") {
          dashboardUrl='/dashboard/super';

        } else if (r && r == "ROLE_OWNER") {
          dashboardUrl='/dashboard/admin';

        } else if (r && r == "ROLE_NORMAL_USER") {
          dashboardUrl='/normaluser/userprofile';

        } else if (r && r == "ROLE_DRIVER") {
          dashboardUrl='/dashboard/admin';

        } else if(r && r == "ROLE_WAREHOUSE"){
          dashboardUrl='/parcel/parcelDashboard';

        } else if(r && r == "ROLE_BRANCH_SUPERVISOR"){
          dashboardUrl='/parcel/parcelDashboard';
        }
      });

      this.router.navigate([dashboardUrl]);

}

getDecodedAccessToken(token: string): any {
  try {
    return jwt_decode(token);
  }
  catch (Error) {
    return null;
  }
}

}
