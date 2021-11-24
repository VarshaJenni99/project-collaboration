import React,{useEffect, useState} from 'react'
import {FireT} from '../../fire'
import Each_Project from './Each_Project'
import Grid from '@material-ui/core/Grid';

export default function TeacherP() {

const [projectList, setProjList]= useState();

useEffect(()=>{
  const teachref=FireT.database().ref(FireT.auth().currentUser.uid).child('projects')
  teachref.on('value',(snapshot)=>{
    const projects=snapshot.val();
    const projectList=[]
    for(let id in projects){
      projectList.push({id,...projects[id]})
    }
    setProjList(projectList);
  })

},[])

  return (
    <div>
      
      <div className="view_proj"> 
      <h2 align='center'> Projects Uploaded By You</h2>
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
        projectList.map((p,index)=>(<Each_Project p={p} key={index} />)):""
      }

        

       </Grid> 
        </div>
    </div>
  )
}
