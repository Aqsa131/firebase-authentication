import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail,
  onAuthStateChanged, signOut, updatePassword, reauthenticateWithCredential
} from './firebaseConfig.js'

const register = (event) => {
  event.preventDefault()
  const email = document.querySelector('#exampleInputEmail1').value
  const password = document.querySelector('#exampleInputPassword1').value
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(email, password);

      const user = userCredential.user;
      if (userCredential?.user) {
        window.location.pathname = "/public/index.html";
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
document.addEventListener('submit', register)


const signIn = (e) => {
  e.preventDefault()
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('Signed in Successfully');
      if (userCredential?.user) {
        if (userCredential.user) {
          alert('Logged in Successfully')
          window.location.pathname = "/public/index.html";
        }
      } else {
        alert('Invalid Credentials')
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
console.log(window.location.pathname);
document.addEventListener('submit', signIn)

// forgot password
const forgotPass = (event) => {
  event.preventDefault()
  let email = document.querySelector('#email')?.value
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
document.querySelector('#forgotPassword')?.addEventListener('click', forgotPass)

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  let name = document.getElementById('name')
  let email = document.querySelector('#email')

  if (user) {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
      });
    console.log("user----------->", user);
    name.innerHTML = user.email.slice(0, user.email.indexOf('@'))
    email.innerHTML = user.email
    if (user) {
      window.location.pathname = '/public/index.html'
      // const uid = user.uid;
    }

    // ...
  } else {
    console.log("user----------->", null);
    if (location.pathname !== '/public/logIn.html' && location.pathname !== '/public/signUp.html') {
      window.location.pathname = '/public/logIn.html'
      window.location.pathname = '/public/signUp.html'

    }

  }
});

// signOut
const logout = () => {
  signOut(auth).then(() => {
    if (signOut) {
      window.location.pathname = '/public/logIn.html'
      console.log('login successfully')
    }
  }).catch((error) => {
    console.log('logout successfully');
  });
}

document.getElementById('logOut')?.addEventListener('click', logout)


// update paswd
// const updatePass = async () => {
//   const user = auth.currentUser;
//   const credential = promptForCredentials();
//   console.log(credential);
  
//   reauthenticateWithCredential(user, credential).then(() => {
//     console.log(user, credential)
//   });
//   try {
//     const newPass = document.getElementById('newPass').value
//     await updatePassword(newPass, user)
//     console.log(newPass, user);
//   }
//   catch (error) {
//     console.log(error);
//   }
// }

// document.getElementById('updtPswd')?.addEventListener('click', updatePass)


