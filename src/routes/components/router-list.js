import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
/* code splitting */
import Loadable from 'react-loadable';

/*loading*/
  //import Loading from '../../common/loading/loading';
/*404 error*/
  //import NoMatch from '../../common/notmatch/notmatch';
/*Home Page*/
  //import HomePage from '../../pages/home-page';
/*components format Code - Splitting
const EventPage = Loadable({
  loader: ()=> import('../../pages/event-page/containers/event-page'),
  loading: Loading
})
*/

const HomePage = ()=>(
  <div>Home</div>
);
const NoMatch = ()=>(
  <div>404</div>
);
const Test = ()=>(
  <div>Si jala</div>
)
const RouterList = (props)=>{
  return(
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/hola" component={ Test }/>
      <Route component={NoMatch} />
    </Switch>        
  )
}


export default RouterList;
