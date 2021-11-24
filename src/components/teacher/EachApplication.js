import React from 'react'
import {FireT, Fire} from '../../fire'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
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
export default function EachApplication({p}) {
  const deleteP=()=>{

    const ref=FireT.database().ref(FireT.auth().currentUser.uid).child('applications').child(p.id);
    ref.remove();
    swal({
      title: "Application removed",
      icon: "success",
    });
    console.log(p)
  }
  const approve=()=>{

    const ref1=FireT.database().ref(FireT.auth().currentUser.uid).child('applications').child(p.id);
    ref1.remove();
    const ref2=FireT.database().ref(FireT.auth().currentUser.uid).child('approved')
    const approved={
      email:p.email,
      title: p.project,
    }
    ref2.push(approved);
    // ref.remove();
    // console.log(p)
    const appr={
      project:p.project,
      email: FireT.auth().currentUser.email
    }
    const ref=Fire.database().ref('resume');
    ref
.orderByChild('email')
.equalTo(p.email)
.once('value')
.then((snapshot)=>
{
  if (snapshot.exists()) {
    // ref.push(appr);
    const refff=Fire.database().ref('resume').child(Object.keys(snapshot.val())[0]).child('approved');
    // console.log(Object.keys(snapshot.val())[0]);
    refff.push(appr);

    swal({
      title: "Approved, student notified",
      icon: "success",
    });
  } 
});
  }



  const classes = useStyles();
  
  return (
    <Grid item sm={3} >
    <div className="each_proj" >
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Student: {p.email} 
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <Link href={p.resume} target="_blank">
        Resume: Click to view
  </Link>
        {/* <a href={p.resume} target="_blank"> Resume: Click to view </a> */}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Project: {p.project} 
        </Typography>
        <Typography variant="body2" component="p">
        Dept Professor: {p.email}
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={deleteP} align='center' size="small">Delete</Button>
      </CardActions>

      <CardActions>
        <Button onClick={approve} align='center' size="small">Approve</Button>
      </CardActions>
    </Card>
    <br/>
    <br/>
    </div>
    </Grid>
  );
  // return (
    

   
  //   <div className="each_proj" >
  //     <h1> Student: {p.email} </h1>
  //     <a href={p.resume} target="_blank"> Resume: Click to view </a>
  //     <h1> Project: {p.project} </h1>
  //     <button onClick={deleteP}> Delete</button>
  //     <br/>
  //     <br/>
    
  //     <button onClick={approve}> Approve</button>
  //     <br/>
  //     <br/>
  //     <br/>

  //   </div>
  // )
}
