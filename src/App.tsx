import * as React from 'react'
import LoginForm from './components/loginForm/loginForm'
import NotFound from './components/404/index'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom'

const App = ()=>{
    return (
        <Router>
            <section>
                <Switch>
                    <Route path="/first">
                        <h1>Hello World</h1>
                    </Route>
                    <Route exact path="/">
                        <LoginForm />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </section>            
        </Router>
    )
}

export default App;