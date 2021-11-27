import React,{useEffect, useState} from 'react'
import {FireT} from '../../fire'
import Apply from'./Apply'
import Grid from '@material-ui/core/Grid';

//students can view and apply for projects uploaded by professors
export default function Student_apply() {

const [projectList, setProjList]= useState();
const [search,setSearch]=useState('')
useEffect(()=>{
  const teachref=FireT.database().ref()
  teachref.on('value',(snapshot)=>{
    const projects=snapshot.val();
    const projectList=[]
    for(let id in projects){
      for( let id2 in projects[id]['projects'])
      { 
        projectList.push({id2,...projects[id]['projects'][id2]})
      }
      // projectList.push(projects[id]['projects'])
    }
    setProjList(projectList)
    console.log(projectList)

  })
  // console.log(projectList)

},[])

  return (
    <div>
      
      <div className="view_proj"> 
      
      <h2 align='center'> All Available Projects</h2>
      <br/>
      <br/>
      <br/>
<input className=" search" type='text' placeholder="Search..." color="white" onChange={event=> {setSearch(event.target.value)}}/> 
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
        projectList.filter((item)=>{
          if(search=="")
          return item
else{
  return Object.keys(item).some(key=>{
    return item[key].toString().toLowerCase().includes(search.toLowerCase())
  })
}
        
          // else if(val.domain.toLowerCase().includes(search.toLowerCase())){
          //   return val
          // }
          
        }).map((p,index)=>(<Apply p={p} key={index}/> )):""
      }
      </Grid>
        </div>
    </div>
  )
}
