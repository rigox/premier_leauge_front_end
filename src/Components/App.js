import React  from 'react';
import Standing from './Standings';
import Admin from './Admin';
import Login from  './Login';
import Navbar from '../layout/Navbar';
import '../App.css'
import  {Route,BrowserRouter,Switch} from 'react-router-dom'


class App extends React.Component{
      constructor(){
           super()
           this.state={}
      }

      render(){
            return(
                <BrowserRouter>
                  <Navbar />
                        <Switch>
                              <Route exact path="/"  component={Login} />
                              <Route exact path="/standings"  component={Standing} />
                              <Route exact path="/Admin"  component={Admin} />
                        </Switch>

                </BrowserRouter>
            )
      }
}


export default App;