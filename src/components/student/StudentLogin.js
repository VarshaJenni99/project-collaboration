import React ,{useState,useEffect} from 'react';
// import fire from '../fire'
import {Fire} from '../../fire'

import Login from './LoginS'

import Dash from './DashS.js'

//handles student login
function StudentLogin() {

  const [user, setUser]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [emailError, setEmailError]=useState('');
  const [passwordError, setPasswordError]=useState('');
  const [hasAccount, setHasAccount]=useState(false);
const clearInputs=()=>{
  setEmail("");
  setPassword("");
}

const clearError=()=>{
  setEmailError("");
  setPasswordError("");
}
  const handleLogin=()=>{
    clearError();
Fire
.auth()
.signInWithEmailAndPassword(email,password)
.catch(err=>{
  switch(err.code){
case "auth/invalid-email":
  case "auth/user-disable":
    case "auth/user-not-found":
      setEmailError(err.message);
      break;
      case "auth/wrong-password":
        setPasswordError(err.message);
        break;
  }
  })
  }

  const handleSignup=()=>{
    clearError();
    Fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err=>{
      switch(err.code){
    case "auth/email-already-in-use":
      case "auth/invalid-email":
          setEmailError(err.message);
          break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
      }
      })
      }

  const handleLogout=()=>{
    Fire.auth().signOut()
  }

  const authListener=()=>{
    Fire.auth().onAuthStateChanged(user=>{
      if(user){
        // setEmailDash(email);
        clearInputs();
        setUser(user); 
      }
      else{
        setUser("");
      }
    }
    )
  }
  useEffect(()=>
  {
    authListener();
  },[])
  return (
    <div className="App">
      {

        user?(
          <Dash email={email} handleLogout={handleLogout}/>
        ):(
          <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />

        )
      }
    </div>
  );
}

export default StudentLogin;
