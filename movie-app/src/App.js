import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/index';

const App = () => {

  return(
    <Router>
      <Header />
      <Switch>

      </Switch>
    </Router>
  )
}

export default App;