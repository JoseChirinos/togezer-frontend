import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
/* code splitting */
import Loadable from 'react-loadable';
/*loading*/
import Loading from '../../loading';
/*404 error*/
import NoMatch from '../../notmatch';

/*Home Page*/
const HomePage = ()=>(
  <div style={{height:'150vh'}}>Home</div>
);
/* Statistics */
const Statistics = Loadable({
  loader: ()=> import('../../statistics/statistics'),
  loading: Loading
});
const RouterList = (props)=>{
  return(
    <Switch>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/statistics" component={ Statistics }/>
      <Route component={NoMatch} />
    </Switch>        
  )
}


export default RouterList;
