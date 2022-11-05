import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
               
                if( err.error != null && err.error.error_description!=null && err.error.error_description=='ERR2001')
                {
                    //invalid credentials
                    return throwError('User name or password is wrong.');
                }
                // auto logout if 401 response returned from api
                this.authenticationService.signOut();               
                location.reload(true);          
            }
            else if (err.status === 400) {
                if( err.error != null && err.error.error_description!=null && err.error.error_description=='User account is locked')
                {
                     //account locked
                    return throwError('User account is locked.');
                } 
                else if( err.error != null && err.error.error!=null && err.error.error=='invalid_grant')
                {
                     //invalid credentials
                    return throwError('User name or password is wrong.');
                }         
            }
            
            const error = err.error.message || err.statusText || err.error.error;
            return throwError(error);
        }))
    }
}