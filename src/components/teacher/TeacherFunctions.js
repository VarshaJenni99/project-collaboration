import React from 'react'
import {FireT} from '../../fire'
 import {useState} from 'react'
 import {Link} from 'react-router-dom'
 import swal from 'sweetalert';
//displays teacher functionalities
export default function Project() {

  const [title,setTitle]=useState('');
  const [domain,setDomain]=useState('');
  const [company,setCompany]=useState('');


  // const [foundemail,setFoundemail]=useState(0);


  const handleOnChangeT=(e)=>
  {
    setTitle(e.target.value);
    
  }

  const handleOnChangeD=(e)=>
  {
    
    setDomain(e.target.value);
    
  }

  const handleOnChangeC=(e)=>
  {
    
    setCompany(e.target.value);
  }

  const createproject=()=>
  {
    // setFoundemail(0);
const teacherref=FireT.database().ref(FireT.auth().currentUser.uid).child('projects')
const project={
  title,
  email: FireT.auth().currentUser.email,
  uid: FireT.auth().currentUser.uid,
  domain,
  company
}
// var updates = {};
teacherref.push(project);
swal({
  title: "Project added",
  icon: "success",
});

}
  return (
    <div className="resumecont">
    <label> Title</label>
    <input className="resumelink" type="text" onChange={handleOnChangeT} value={title}/>
    <br/>
    <label> Domain</label>
    <input className="resumelink" type="text" onChange={handleOnChangeD} value={domain}/>
    <br/>
    <label> Company</label>
    <input className="resumelink" type="text" onChange={handleOnChangeC} value={company}/>
    <br/>
    <br/>
    <button onClick={createproject} className="resume"> Upload Project</button>
    <br/>
    <br/>
    <Link to='/teacherP'> 
    <button  className="resume"> View Projects Uploaded</button>
    </Link>
    <br/>
    <Link to='/applications'> 
    <button  className="resume"> View Applications Received</button>
    </Link>
    <br/>
    <Link to='/teacher_approved'> 
    <button  className="resume"> View Applications Approved By You </button>
    </Link>
    </div>
  )
}
