import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const imagesSteps = [
  {
    label: 'How to be happy :)',
    imgPath: '/assets/images/steppers/1-happy.jpg',
  },
  {
    label: '1. Work with something that you like, like…',
    imgPath: '/assets/images/steppers/2-work.jpg',
  },
  {
    label: '2. Keep your friends close to you and hangout with them',
    imgPath: '/assets/images/steppers/3-friends.jpg',
  },
  {
    label: '3. Travel everytime that you have a chance',
    imgPath: '/assets/images/steppers/4-travel.jpg',
  },
  {
    label: '4. And contribute to Material-UI :D',
    imgPath: '/assets/images/steppers/5-mui.jpg',
  },
];

const styles = theme => ({
  root: {
    width:'100%',
    height:'100vh',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  image: {
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover!important',
    backgroundRepeat: 'no-repeat',
  },
  mobileStepper:{
    position:'absolute',
    width:'60%',
    bottom:25,
    margin: '0 auto',
    left:0,
    right:0,
    borderRadius:5,
  }
});

class TextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = imagesSteps.length;

    return (
      <div className={classes.root}>
        <div className={ classes.image } style={{
          background:`url(${imagesSteps[activeStep].imgPath})`,
        }}>
        </div>
        <MobileStepper
          steps={maxSteps}
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

TextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);