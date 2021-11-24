import React from 'react'
import {Fire} from '../../fire'
 import {useState,useRef,useEffect} from 'react'
 import {Link} from 'react-router-dom'
 import swal from 'sweetalert';

export default function Resume() {

  const [title,setTitle]=useState('');
  const [foundemail,setFoundemail]=useState(false);

//   const firstTimeRender = useRef(true);
//   useEffect(() => {if (!firstTimeRender.current){


//     window.alert("resume updated")
//  }}, [foundemail]);

//  useEffect(() => { 
//   firstTimeRender.current = false 
// }, [])

  const handleOnChange=(e)=>
  {
    setTitle(e.target.value);
  }

  const createresume=()=>
  {
const resumeref=Fire.database().ref("resume")
const resume={
  title,
  email: Fire.auth().currentUser.email,
  uid: Fire.auth().currentUser.uid
}
// var updates = {};
resumeref
.orderByChild('email')
.equalTo(Fire.auth().currentUser.email)
.once('value')
.then((snapshot)=>
{
  if (snapshot.exists()) {
    let userData = snapshot.val();
    console.log(Object.keys(snapshot.val())[0]);
    resumeref.child(Object.keys(snapshot.val())[0]).update({title })
    swal({
      title: "Resume updated",
      icon: "success",
    });
    return userData;
  } else {
    // console.log('not found');
    resumeref.push(resume);
    swal({
      title: "Resume added",
      icon: "success",
    });
  }
});



//   snapshot.forEach(function(data) {
// // console.log(data.key);
// resumeref.child(data.key).get()
// .then((snapshot) => {
//   // console.log(snapshot.val())
//     if (snapshot.val()['email']== Fire.auth().currentUser.email) {
//       console.log(snapshot.val());
//   setFoundemail(true);
//       // updates['/resume/' + data.key ] = resume;
//       // resumeref.child(data.key).update({title })
//       // window.alert("resume updated")

//     }
    
//   })
//   })
// });  

  // if(!foundemail)
  //   {console.log("No data available");
  //   // resumeref.push(resume);
  //   window.alert("resume added")}
 



}
  return (
    <div className="resumecont">
      <label> Upload/ Update Resume Link</label>
    <input className="resumelink" type="text" onChange={handleOnChange} value={title}/>
    <br/>
    <br/>
    <button onClick={createresume} className="resume"> Submit Resume</button>
<br/>
<br/>
<Link to='/student_apply'>
    <button  className="resume"> View Projects/Apply for Projects</button>
    </Link>
    <br/>
    <Link to='/approved'>
    <button  className="resume"> Approved Applications</button>
    </Link>
    </div>
  )
}
