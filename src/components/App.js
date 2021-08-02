import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//reset css
import "../css/reset.css"

//component imports
import Home from './Home'
import Disciplines from './Disciplines'
import DisciplinesById from './DisciplinesById'

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


        <Route path='/disciplines/:id' exact>
          <DisciplinesById/>
        </Route>
     
      </Switch>
    </Router>
    
    
  );

  
}

export default App;
