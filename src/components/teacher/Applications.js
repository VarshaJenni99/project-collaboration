import React,{useEffect, useState} from 'react'
import {FireT} from '../../fire'
import EachApplication from './EachApplication'
import Grid from '@material-ui/core/Grid';


//displays applications by students
export default function Applications() {

const [projectList, setProjList]= useState();

useEffect(()=>{
  const teachref=FireT.database().ref(FireT.auth().currentUser.uid).child('applications')
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
      <h2 align="center"> Project Applications Received</h2>
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
        projectList.map((p,index)=>(<EachApplication p={p} key={index} />)):""
      }

        

</Grid>
        </div>
    </div>
  )
}
