import React from 'react';
// import fire from '../fire'
import {Fire} from '../../fire'
import StudentFunctions from './StudentFunctions.js'

//student dashboard after the student logs in 
const Dash=(props)=> {
const { handleLogout} = props;
const user = Fire.auth().currentUser;

  return (
<div> 
    <section className="hero"> 
      <nav>
        <h2> {'Welcome Students: '+ user.email} </h2>
        <button onClick={handleLogout}> Logout</button>
      </nav>
<StudentFunctions/>      
    </section>
    
    </div>
  )
}

export default Dash;