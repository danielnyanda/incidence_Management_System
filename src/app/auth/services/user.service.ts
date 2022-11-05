import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'app/models/user';
import { ApiResponse } from 'app/models/apiResponse.model';



@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`user`);
    }

    getById(id: number) {
        return this.http.get(`user/${id}`);
    }

    register(user: User) {
        return this.http.post(`user/register`, user);
    }

    update(user: User) {
        return this.http.put(`user/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`user/${id}`);
    }

    invite(emails: String[]): Observable<any> {
        return this.http.post(`user/invite`, emails, { responseType: 'text' });
    }

    validateUrl(token: string): Observable<any> {
        return this.http.get(`anonymous/validate`, { params: { token: token }, responseType: 'text' });
    }

    resetPassword(resetObj: any): Observable<any> {
        return this.http.post(`anonymous/reset`, resetObj, { responseType: 'text' });
    }

    forgotPassword(username: string): Observable<any> {
        return this.http.get(`anonymous/forgot`, { params: { username: username }, responseType: 'text' });
    }

    getAllLightUsers(): Observable<User[]> {
        return this.http.get<User[]>('user/allLight');
    }

    activateAccount(code: any): Observable<any> {
        return this.http.post<ApiResponse>('anonymous/activatecargouser', code);
    }

    getVerificationCode(userId:number) {
        return this.http.get<ApiResponse>('anonymous/usercnumber/'+userId);
    }
}