import React from 'react';
import {Link} from 'react-router-dom'

//home page of the application
const Main=()=>{

  return (
  <section className='login'>
<div className="loginContainer ">
  
  <div className="btnContainer"> 
  <Link to='/teachers'>

  
    <button > Teachers </button>
    </Link>
    <br/>
    <br/>
    <Link to='/students'>
    <button > Students</button>
    </Link>
  

  </div>
  </div>


  </section>
  )
}

export default Main;