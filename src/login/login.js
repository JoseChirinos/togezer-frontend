import React, { Component } from 'react';
import { loginStyle } from './styles.js';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

/* Components */
import SignIn from './login-signin';

class Login extends Component{
  render(){
    const { classes } = this.props;
    return(
      <section 
        className={ classes.container }
        style={{
          backgroundImage: `url(/assets/images/bg-login-min.jpg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}  
      >
        <div style={{ flexGrow: 1}}>
          <Grid item xs={12}>
            <Grid 
                container 
                spacing={0} 
                justify="center" 
                alignItems="center"
                direction="row">
                
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} className={classes.relative}>
                  <SignIn handleLogin={ this.props.handleLogin }/>
                </Grid>
            </Grid>
          </Grid>
        </div>
      </section>
    )
  }
}

export default withStyles(loginStyle)(Login);;