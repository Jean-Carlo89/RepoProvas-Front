import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//reset css
import "../css/reset.css"

//component imports
import Home from './Home'
import Disciplines from './Disciplines'

function App() {
 
  return (
    
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>

        <Route path='/disciplines' exact>
          <Disciplines/>
        </Route>
      </Switch>
    </Router>
    
    
  );

  
}

export default App;
