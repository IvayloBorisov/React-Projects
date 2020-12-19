import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navigation } from './components/index';

const App = () => {

  return(
    <Router>
      <Navigation type={ "header" }/>
      <Switch>

      </Switch>
    </Router>
  )
}

export default App;