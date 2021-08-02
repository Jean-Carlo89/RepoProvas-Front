import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//reset css
import "../css/reset.css"

//component imports
import Home from './Home'
import Disciplines from './Disciplines'
import DisciplinesById from './DisciplinesById'
import Professors from './Professors'
import ProfessorById from './ProfessorById'

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


        <Route path='/professors' exact>
          <Professors/>
        </Route>

        <Route path='/professors/:id' exact>
          <ProfessorById/>
        </Route>
     
      </Switch>
    </Router>
    
    
  );

  
}

export default App;
