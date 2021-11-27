import React,{useEffect, useState} from 'react'
import {FireT,Fire} from '../../fire'
import Each_ApprovalT from'./Each_ApprovalT'

import Grid from '@material-ui/core/Grid';

//function to enable techers to approve projects
export default function ApprovalT() {

const [projectList, setProjList]= useState();

useEffect(()=>{
  const appref=FireT.database().ref(FireT.auth().currentUser.uid).child('approved')
  
    appref.on('value',(snapshot)=>{
      const projects=snapshot.val();
      console.log(projects)
      const projectList=[]
      for(let id in projects){
         
          projectList.push({id,...projects[id]})
        
      }
      setProjList(projectList)
    })
},[])

  return (
    <div>
      
      <div className="view_proj"> 
      
      <h2 align="center"> All Approved Applications</h2>
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
        projectList.map((p,index)=>(<Each_ApprovalT p={p} key={index}/> )):""
      }
      </Grid>
        </div>
    </div>
  )
}
