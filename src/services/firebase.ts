import * as firebase from "firebase/app";
import { getAuth, sendSignInLinkToEmail, signInWithEmailAndPassword } from "firebase/auth";

// App imports
export const login = async (email: string, password: string) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
}

export const registerWithEmail = async (email: string) => {
  const auth = getAuth();
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "https://9f44-2001-f70-a280-d00-25f-00-1003.ngrok.io/",
    // This must be true.
    handleCodeInApp: true,
    // dynamicLinkDomain: "9f44-2001-f70-a280-d00-25f-00-1003.ngrok.io",
  };

  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA_TIS7xCmd2HAeEH2KuJQRxgPL9LEOstM",
  authDomain: "fir-wallet-2411f.firebaseapp.com",
  projectId: "fir-wallet-2411f",
  storageBucket: "fir-wallet-2411f.appspot.com",
  messagingSenderId: "84081683227",
  appId: "1:84081683227:web:e8c837c8e8e977f14001be",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
