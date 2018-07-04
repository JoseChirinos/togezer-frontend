import React from 'react';
import { signInStyle } from './login.styles.js';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import SendIcon from '@material-ui/icons/Send';

/* Components */
import TextField from '@material-ui/core/TextField';


const SignIn = (props)=>{
  const { classes } = props;
  return(
    <Grid item xs={12} className={ classes.content }>
      <Grid 
          container 
          spacing={0} 
          justify="center" 
          alignItems="center"
          direction="row">
        <Grid item xs={12}>
          <img
            className={ classes.logo } 
            src="/assets/images/logo-togezer.44d64ea7.png" 
            alt="logo togezer"/>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="email">Username or Email</InputLabel>
            <Input
              id="email"
              className={ classes.input }
              startAdornment={
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              className={ classes.input }
              startAdornment={
                <InputAdornment position="start">
                  <FingerprintIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <Button className={ classes.button } variant="contained" color="primary">
              Sing In
            </Button>
          </FormControl>
        </Grid>
        <Grid item xs={10}>
          <Divider/>
        </Grid>
        <Grid item xs={8}>
          <Typography align="center" className={ classes.info }>
              If you want to access TogeZer World
              just send us an email at
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Paper className={ classes.paper }>
            <a href="mailto:hello@togezer.travel" className={ classes.linker }></a>
            <Button variant="fab" color="secondary" className={ classes.mail }>
              <SendIcon/>
            </Button>
            mailto:hello@togezer.travel
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default withStyles(signInStyle)(SignIn);