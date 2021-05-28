import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import TodoPage from './Pages/TodoPage';
import Layout from './hoc/Layout/Layout';
import './app.css'


function App () {
    
  return(
    <Layout> 
      <Switch>
          <Route path={'/'} component={HomePage} exact/>
          <Route path={'/about'} component={AboutPage}/>
          <Route path={'/todo/:id'} component={TodoPage}/>
          
          <Redirect to={'/'} />
      </Switch>
    </Layout>
  );
}




export default App
