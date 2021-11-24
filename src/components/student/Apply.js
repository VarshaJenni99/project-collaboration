import React ,{useState, useEffect, useRef} from 'react'
import {FireT, Fire} from '../../fire'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  
  pos: {
    marginBottom: 12,
  },
});
export default function Apply({p}) {
  const [projectList, setProjList]= useState();
  
  const [resume, setResume]= useState('');
  const firstTimeRender = useRef(true);


  
  useEffect(() => {if (!firstTimeRender.current){
    const ref=FireT.database().ref(p.uid).child('applications');
    const application={
      
      email: Fire.auth().currentUser.email,
      uid: Fire.auth().currentUser.uid,
      project: p.title,
      resume: resume
    }
    ref.push(application);
    console.log(application)
  // window.alert("applied for the project")
  swal({
    title: "Applied for the project",
    // text: "You clicked the button!",
    icon: "success",
  });
 }}, [resume]);

 useEffect(() => { 
  firstTimeRender.current = false 
}, [])

  const apply= ()=>{

  const stref=Fire.database().ref()
  stref.once('value')
  .then(function(snapshot){
    const projects=snapshot.val();
    const all_students=projects['resume']
    const projectList=[]
    for(let id in all_students){
      projectList.push({id,...all_students[id]})
    }
    setProjList(projectList)
    console.log(projectList)
  })
  for(let id in projectList)
    {
      if(projectList[id]['email']==Fire.auth().currentUser.email)
    {
      if(projectList[id]['title']!="")
    setResume(projectList[id]['title'])
    }
    }
    console.log(resume)
}
const classes = useStyles();
  
  return (
    <Grid item sm={3} >
    <div className="each_proj" >
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Company: {p.company}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Title: {p.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Domain: {p.domain}
        </Typography>
        <Typography variant="body2" component="p">
        Dept Professor: {p.email}
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={apply} align='center' size="small">Apply</Button>
      </CardActions>
    </Card>
    <br/>
    <br/>
    </div>
    </Grid>
  );

// return (
//     <div >
//     <div className="each_proj" >
//       <h1> Title: {p.title} </h1>
//       <h1> Company: {p.company} </h1>
//       <h1> Domain: {p.domain} </h1>
//       <h1> Dept Professor: {p.email} </h1>
//       <button onClick={apply}> Apply</button>
//       <br/>
//       <br/>
//       <br/>
//     </div>
//     </div>
//   )
}

