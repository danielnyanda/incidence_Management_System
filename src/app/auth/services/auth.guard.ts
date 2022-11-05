import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import  jwt_decode from 'jwt-decode';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authenticationService.isUserLoggedIn()) {
            //if role expected
            if (route.data && route.data.expectedRole) {
                let expectedRoleArray: any[] = route.data.expectedRole;
                const token = localStorage.getItem('jwtToken');

                // decode the token to get its payload
                const tokenInfo = jwt_decode(token);
                var userRole: string[] = tokenInfo['authorities'];
                let authorized: boolean = false;
                expectedRoleArray.forEach(expectedRole => {
                    if (userRole.includes(expectedRole)) {
                        authorized = true;
                    }
                });
                return authorized;
            }
            // default authorised so return true
            return true;
        } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}