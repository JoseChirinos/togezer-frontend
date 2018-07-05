import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...options})=>{
  return(
    <Route { ...options } render={ (props)=>(
        options.isAuth === true
        ? <Component {...props}/>
        : <Redirect to='/login'/>
      )}
    />
  )
}

export default PrivateRoute;
