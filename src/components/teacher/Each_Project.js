import React from 'react'
import {FireT} from '../../fire'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';

//displays each uploaded project as a display card
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

export default function PerTeachProj({p}) {
  const deleteP=()=>{

    const ref=FireT.database().ref(FireT.auth().currentUser.uid).child('projects').child(p.id);
    ref.remove();
    swal({
      title: "Project deleted",
      icon: "success",
    });
    
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
      </CardContent>
      <CardActions>
        <Button onClick={deleteP} align='center' size="small">Delete</Button>
      </CardActions>
    </Card>
    <br/>
    <br/>
    </div>
    </Grid>
  );

  // return (
    

   
  //   <div className="each_proj" >
  //     <h1> Title: {p.title} </h1>
  //     <h1> Company: {p.company} </h1>
  //     <h1> Domain: {p.domain} </h1>
  //     <button onClick={deleteP}> Delete</button>
  //     <br/>
  //     <br/>
  //     <br/>
  //   </div>
  // )
}
