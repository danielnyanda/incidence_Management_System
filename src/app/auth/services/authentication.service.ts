import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtToken } from '../models/jwtToken.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    // private loginUrl: string = "oauth/token?grant_type=password&client_id=JETCargo_Client&client_secret=33745ada8245409a3d402d28a333d2dd0137d3fa3e26ab18f1d42cbe0e8737698167c6fff2875b8b&override=true&provider=JEMATECH";
    private loginUrl: string = "oauth/token?grant_type=password&client_id=JETCargo_Client&client_secret=33745ada8245409a3d402d28a333d2dd0137d3fa3e26ab18f1d42cbe0e8737698167c6fff2875b8b&override=true";
    private currentUserJwtSubject: BehaviorSubject<JwtToken>;
    public currentUserJwt: Observable<JwtToken>;
    private userToken: JwtToken;

    constructor(private http: HttpClient) {
        this.currentUserJwtSubject = new BehaviorSubject<JwtToken>(JSON.parse(localStorage.getItem('jwtToken')));
        this.currentUserJwt = this.currentUserJwtSubject.asObservable();
    }

    public isUserLoggedIn(): boolean {
        if (localStorage.getItem('jwtToken')) {
            return true;
        }
        return false;
    }

    public signIn(loginCredentials: any) {
        //log user in
        if (loginCredentials == null || loginCredentials.userName == "" || loginCredentials.password == "" || loginCredentials.companyCode == "") {
            //return;

        }

        var userCredentials = "&username=" + loginCredentials.userName + "&password=" + loginCredentials.password;
        var postIrl1 = "";
        if(loginCredentials.companyCode != null){
            postIrl1 = this.loginUrl + "&" + "provider" + "=" + loginCredentials.companyCode;

        } else {
            loginCredentials.companyCode = "JEMATECH";
            postIrl1 = this.loginUrl + "&" + "provider" + "=" + "JEMATECH";
        }

        // var postIrl1 = this.loginUrl;
        var postUrl = postIrl1 + userCredentials;

        return this.http.post(postUrl, null);

    }

    /**
    * Called only once logged in
    * @param token
    */
    public setUserToken(token: JwtToken) {

        localStorage.setItem('jwtToken', JSON.stringify(token));
        this.currentUserJwtSubject.next(token);
    }

    public signOut() {
        localStorage.removeItem('jwtToken');
        this.currentUserJwtSubject.next(null);
        localStorage.clear();
        location.reload();
        // alert(JSON.stringify(this.currentUserJwtSubject.value));
    }

    public signOut2() {
        localStorage.removeItem('jwtToken');
        this.currentUserJwtSubject.next(null);
        localStorage.clear();
        //location.reload();
        // alert(JSON.stringify(this.currentUserJwtSubject.value));
    }

    public get currentUserJwtToken(): JwtToken {
        // alert(JSON.stringify(this.currentUserJwtSubject.value));
        return this.currentUserJwtSubject.value;
    }

    public getUserFullName(): string {
        if (this.currentUserJwtSubject.value) {
            return this.currentUserJwtSubject.value.userFullName;
        }
        return "";
    }

    public getUserToken(): JwtToken {
        return this.userToken;
    }

    public getLoggedInUserId(): number {
        if (this.currentUserJwtSubject.value) {
            return this.currentUserJwtToken.userId;
        }
        return -1;
    }
}
