import React, { useEffect, useState } from "react";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
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
          const auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen((signedIn) => {
            setIsSignedIn(signedIn);
          });
        });
    });
  }, []);

  const isSignedHandler = () => {
    if (isSignedIn === null) {
      return "Unknown";
    } else if (isSignedIn) {
      return "Signed in";
    } else {
      return "Not signed in";
    }
  };

  return <div>{isSignedHandler()}</div>;
};

export default GoogleAuth;
