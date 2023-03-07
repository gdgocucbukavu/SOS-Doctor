// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyBcNUuB5BHd6639i0N5nFsXEnKYN_vz65s",
  authDomain: "sosdokta-auth.firebaseapp.com",
  projectId: "sosdokta-auth",
  storageBucket: "sosdokta-auth.appspot.com",
  messagingSenderId: "529745531968",
  appId: "1:529745531968:web:4b3185988149186a8afba5",
  measurementId: "G-ZELLFQS611",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const messaging = getMessaging(app);
getToken(messaging, {
  vapidKey:
    "BENqchaOC5HFj0uJjRcTCeO666wOSeLoHo8yTpazjovvAjfD-nJwrzdoXWeIj4BrYdcRbWsmwV_76IDL7WmKIb8",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...

      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

// Retrieve firebase messaging
