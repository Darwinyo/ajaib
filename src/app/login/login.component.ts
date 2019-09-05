import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';

declare const gapi: any;
declare const FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  storage: Storage;
  auth2: any;
  constructor(private router: Router,public zone: NgZone) {
    this.storage = sessionStorage;
  }

  ngOnInit() {
    this.googleSDK();
    this.facebookSDK();
  }

  prepareLoginButton() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
        (googleUser) => {

          const profile = googleUser.getBasicProfile();
          this.storage.setItem('user', JSON.stringify(profile.ig));
          this.zone.run(() => {this.router.navigate(['/logged']);});
        }, (error) => {
          console.log(error);
        });
  }
  googleSDK() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '496275152936-2ie67jm2p3s3fpmno9s630tc03l76k32.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    }

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'google-jssdk'))
  }
  facebookSDK() {

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '460077241387979',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

  }
  submitLogin() {
    FB.login((response)=> {
          if (response.authResponse) {
            FB.api(
              "/"+response.authResponse.userID+"/",
              function (response) {
                if (response && !response.error) {
                  this.storage.setItem('user', JSON.stringify(response.name));
                  this.zone.run(() => {this.router.navigate(['/logged']);});
                }
              }
          );
          } else {
            console.log('User login failed');
          }
        }
      );
  }
}
