import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoute } from './DashboardRoute';
import { AuthContext } from '../auth/AuthContext';


export default function AppRouter() {
  
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact 
            path="/login" 
            component={LoginScreen} 
            isAuthenticated={ user.logged }
          />

          <PrivateRoute 
            path="/" 
            component={DashboardRoute}
            isAuthenticated={ user.logged }
           />
        </Switch>
      </div>
    </Router>
  );
}
