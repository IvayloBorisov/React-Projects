import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './components/index';
import {
         HomePage,
         NowPlayingPage,
         TopRatedPage, 
         UpcomingPage, 
         CategoriesPage,
         MovieDetailsPage,
         TvDetailsPage,
        } from './pages/index';

const Routes = () => {

    return(
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/now_playing" component={ NowPlayingPage } />
        <Route path="/top_rated" component={ TopRatedPage } />
        <Route path="/upcoming" component={ UpcomingPage } />
        <Route path="/category/:id" component={ CategoriesPage } />
        <Route path="/movie/:id" component={ MovieDetailsPage }/>
        <Route path="/tv/:id" component={ TvDetailsPage }/>
        <Redirect to={HomePage}/>
      </Switch>
    </Router>
    )
}

export default Routes;