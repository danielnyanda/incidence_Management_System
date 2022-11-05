import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from './authentication.service';
//import { SpinnerService } from 'app/shared/spinner.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    SERVER_URL: string = environment.apiServerUrl;
    BASE_URL = this.SERVER_URL + 'api/';
    BASE_URL1 = '';


    private requests: HttpRequest<any>[] = [];

    constructor(
        private authenticationService: AuthenticationService,
      //  private spinner: SpinnerService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserJwtToken;
        //this.spinner.start();
        let apiReq;
        if (request.url.indexOf("anonymous") > -1) {
            apiReq = request.clone({
                url: `${this.SERVER_URL}${request.url}`
            });
        } else if (currentUser && currentUser.accessToken && request.url.indexOf("secure") <= -1) {
            //to remove  && request.url.indexOf("secure") <= -1 from if
            apiReq = request.clone({
                url: `${this.BASE_URL}${request.url}`,
                setHeaders: {
                    Authorization: `Bearer ${currentUser.accessToken}`
                }
            });
        }
        else if (currentUser && currentUser.accessToken  && request.url.indexOf("secure") > -1) {
            //entire if block to be deleted
            //to be deleted
            apiReq = request.clone({
                url: `${this.SERVER_URL}${request.url}`,
                setHeaders: {
                    Authorization: `Bearer ${currentUser.accessToken}`
                }
            });
        }
        else if (request.url.indexOf("oauth") > -1) {
            apiReq = request.clone({
                url: `${this.SERVER_URL}${request.url}`
            });
        }
         else {
            apiReq = request.clone({
                url: `${this.BASE_URL1}${request.url}`
            });
        }

        return next.handle(apiReq).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
               //         this.spinner.stop();
                        console.log(event.status);
                    }
                },
                error => {
               //     this.spinner.stop();
                    this.handleError(error);
                },
                () => {
                //    this.spinner.stop();
                }
            )
        );
    }

    handleError(err: any) {
        if (err == 'Unknown Error') {
        //    this.toastr.error("Backend server is not accessible !", "Server Unavailable");
        }
    }
}
