import { Component, OnInit } from '@angular/core';

import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  constructor(public oidcSecurityService: OidcSecurityService) {}

  login() {
    this.oidcSecurityService.authorize();
  }

  ngOnInit(): void {
    
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
      /*...*/
      if(isAuthenticated){
        this.oidcSecurityService.getAccessToken().subscribe((token) => {
          /*const httpOptions = {
            headers: new HttpHeaders({
              Authorization: 'Bearer ' + token,
            }),
          };*/
        });
      }
    });

  }

}
