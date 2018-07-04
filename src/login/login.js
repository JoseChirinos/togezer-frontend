import React, { Component } from 'react';
import { loginStyle } from './login.styles.js';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

/* Components */
import SignIn from './login-signin';
import TextMobileStepper from './login-slider';

class Login extends Component{
  render(){
    const { classes } = this.props;
    return(
      <section className={ classes.container }>
        <div style={{ flexGrow: 1}}>
          <Grid item xs={12}>
            <Grid 
                container 
                spacing={0} 
                justify="center" 
                alignItems="center"
                direction="row">
                
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} className={classes.relative}>
                  <SignIn/>
                </Grid>
                <Hidden smDown>
                  <Grid item xs={ 12 } sm={12} md={6} lg={8} xl={9} className={classes.relative}>
                    <TextMobileStepper/>
                  </Grid>
                </Hidden>
            </Grid>
          </Grid>
        </div>
      </section>
    )
  }
}

export default withStyles(loginStyle)(Login);;