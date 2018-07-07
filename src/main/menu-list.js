import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { listStyle } from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import BarChartIcon from '@material-ui/icons/BarChart';

const MenuList = (props)=>{
  const { classes } = props;
  return(
    <div>
      <ListItem button>
        <img 
          src="/assets/images/logo-togezer-white.png"
          className={ classes.image }
          alt=""/>
      </ListItem>
      <NavLink to="/statistics">
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon className={ classes.item } />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography className={ classes.item }>
                Statistics
              </Typography>
            }
          />
        </ListItem>
      </NavLink>
      <NavLink to="/">
        <ListItem button>
          <ListItemIcon>
            <StarIcon className={ classes.item } />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography className={ classes.item }>
                Starred
              </Typography>
            }
          />
        </ListItem>
      </NavLink>
        
      <NavLink to="/">
        <ListItem button>
          <ListItemIcon>
            <SendIcon className={ classes.item } />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography className={ classes.item }>
                Send Mail
              </Typography>
            }
          />
        </ListItem>
      </NavLink>
      
      <NavLink to="/">
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon className={ classes.item } />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography className={ classes.item }>
                Drafts
              </Typography>
            }
          />
        </ListItem>
      </NavLink>

    </div>
  )
}

export default withStyles(listStyle)(MenuList);