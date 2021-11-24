import React from 'react'
import {FireT} from '../../fire'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

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

export default function Each_Approval({p}) {


  const classes = useStyles();
  
  return (
    <Grid item sm={3} >
    <div className="each_proj" >
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Teacher: {p.email}        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
        Project: {p.project}  
        </Typography>
        
      </CardContent>
      
    </Card>
    <br/>
    <br/>
    </div>
    </Grid>
  );
  
  // return (
    

   
  //   <div className="each_proj" >
  //     <h1> Teacher: {p.email} </h1>
  //     <h1> Project: {p.project} </h1>
  //     <br/>
  //     <br/>
  //     <br/>
  //   </div>
  // )
}
