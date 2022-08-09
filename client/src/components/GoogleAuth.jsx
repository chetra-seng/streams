import React, { useEffect, useState } from "react";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "493172449628-188kr9vobpnohm65sh5373la6m6cokrv.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streams",
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
          setIsSignedIn(auth?.isSignedIn.get());
          auth?.isSignedIn.listen((signedIn) => {
            setIsSignedIn(signedIn);
          });
        });
    });
  }, [auth]);

  const isSignedHandler = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={() => {
            auth.signOut();
          }}
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="ui red google button"
          onClick={() => {
            auth.signIn();
          }}
        >
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  };

  return <div>{isSignedHandler()}</div>;
};

export default GoogleAuth;
