import React ,{useState,useEffect} from 'react';
import {FireT} from '../../fire'
import LoginT from './LoginT'
// import * as admin from "firebase-admin";
// import admin from '../admin'

//handles teacher login
import DashT from './DashT.js'
function TeacherLogin() {

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
FireT
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
    FireT
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
    FireT.auth().signOut()
  }

  const authListener=()=>{
    FireT.auth().onAuthStateChanged(user=>{
      if(user){
        
        
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
          <DashT email={email} handleLogout={handleLogout}/>
        ):(
          <LoginT email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />

        )
      }
    </div>
  );
}

export default TeacherLogin;
