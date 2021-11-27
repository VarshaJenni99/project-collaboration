import React,{useEffect, useState} from 'react'
import {FireT,Fire} from '../../fire'
import Each_Approval from'./Each_Approval'
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';

//function to display approved projects on student dashboard
export default function Approval() {

const [projectList, setProjList]= useState();

useEffect(()=>{
  const appref=Fire.database().ref("resume")
  appref
.orderByChild('email')
.equalTo(Fire.auth().currentUser.email)
.once('value')
.then((snapshot)=>
{
  if (snapshot.exists()) {
    let userData = snapshot.val();
    console.log(Object.keys(snapshot.val())[0]);
    const newref=Fire.database().ref("resume").child(Object.keys(snapshot.val())[0]).child('approved')



    newref.on('value',(snapshot)=>{
      const projects=snapshot.val();
      const projectList=[]
      for(let id in projects){
         
          projectList.push({id,...projects[id]})
        
      }
      setProjList(projectList)
      if(projectList.length>0){
      swal({
        title: `You have ${projectList.length} approvals! `,
        icon: "success",
      });
    }
    })
    
  } 
});
  

},[])

  return (
    <div>
      
      <div className="view_proj"> 
      
      <h2 align='center'> All Approved Applications</h2>
      <br/>
      <br/>
      
      <br/>
      <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="center"
>
      {projectList?
      
        
        projectList.map((p,index)=>(<Each_Approval p={p} key={index}/> ))  :""
      }
      </Grid>
        </div>
    </div>
  )
}
