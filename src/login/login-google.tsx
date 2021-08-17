import React, { useEffect } from 'react';
// import './login.scss';

import { Button } from 'antd';

function loadScript(onLoad = () => {}, onError = () => {}) {
  const element = document.getElementsByTagName('script')[0];
  const lastScript = element;
  let script = element;
  script = document.createElement('script');
  script.id = 'google-login';
  script.src = process.env.REACT_APP_GAPI_SCRIPT_URL!;
  if (lastScript && lastScript.parentNode) {
    lastScript.parentNode.insertBefore(script, lastScript);
  } else {
    document.head.appendChild(script);
  }
  script.onerror = onError;
  script.onload = onLoad;
};

function removeScript() {
  const element = document.getElementById('google-login');
  if (element) {
    element!.parentNode!.removeChild(element);
  }
}

function LoginGoogle() {
  useEffect(() => {
    let unmounted = false
    loadScript(() => {
      const gapi = (window  as any).gapi;
      gapi.load('auth2', () => {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        if (!GoogleAuth) {
          const params = {
            client_id: `${process.env.REACT_APP_GAUTH_CLIENT_ID}.apps.googleusercontent.com`,
            cookie_policy: 'single_host_origin',
          };
          gapi.auth2.init(params).then(
            (res: any) => {
              if (!unmounted) {
                console.log(res);
                const isSignedIn = res.isSignedIn.get();
                console.log('isSignedIn', isSignedIn);
                if (isSignedIn) {
                  const userInfo = res.currentUser.get();
                  console.log(userInfo);
                }
              }
            }
          );
        } else {
          // GoogleAuth.then(
          //   () => {
          //     if (unmounted) {
          //       return;
          //     }
          //     if (isSignedIn && GoogleAuth.isSignedIn.get()) {
          //       setLoaded(true);
          //       onAutoLoadFinished(true);
          //       handleSigninSuccess(GoogleAuth.currentUser.get());
          //     } else {
          //       setLoaded(true);
          //       onAutoLoadFinished(false);
          //     }
          //   },
          //   (err) => {
          //     onFailure(err);
          //   }
          // );
        }
      });
    })

    return () => {
      unmounted = true
      removeScript();
    }
  });

  const signinWithGoogle = () => {
    const GoogleAuth = (window as any).gapi.auth2.getAuthInstance();
    GoogleAuth.signIn({}).then(
      (res: any) => {
        console.log('login succeed', res);
        const basicProfile = res.getBasicProfile();
        const authResponse = res.getAuthResponse(true);
        const data: any = {};
        data.googleId = basicProfile.getId();
        data.tokenObj = authResponse;
        data.tokenId = authResponse.id_token;
        data.accessToken = authResponse.access_token;
        data.profileObj = {
          googleId: basicProfile.getId(),
          imageUrl: basicProfile.getImageUrl(),
          email: basicProfile.getEmail(),
          name: basicProfile.getName(),
          givenName: basicProfile.getGivenName(),
          familyName: basicProfile.getFamilyName(),
        };
        console.log('data', data);
      },
      (err: any) => {
        console.log('login failed', err);
      }
    );
  }

  return (
    <Button onClick={() => signinWithGoogle()}>
      <i className="fab fa-google"></i> 使用Google登录
    </Button>
  );
}

export default LoginGoogle;
