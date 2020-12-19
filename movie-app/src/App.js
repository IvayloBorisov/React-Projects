import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components/index';

const App = () => {

  return(
    <Router>
      <Header />
      <Switch>

      </Switch>
      <Footer />
    </Router>
  )
}

export default App;