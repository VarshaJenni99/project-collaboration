import React from 'react';
import {FireT} from '../../fire'
import LoginT from './LoginT';
// import * as admin from "firebase-admin";
// import admin from '../admin'
import TeacherFunctions from './TeacherFunctions.js'

//displays teacher functionalities and routes to the functionalities when clicked
const DashT=(props)=> {
const { handleLogout} = props;
const user = FireT.auth().currentUser;

  return ( 
    <div> 
    <section className="hero"> 
    <nav>
      <h2> {'Welcome Teachers: '+ user.email} </h2>
      <button onClick={handleLogout}> Logout</button>
    </nav>
    <TeacherFunctions/>
  </section>
    
     
     </div>
  )
}

export default DashT;