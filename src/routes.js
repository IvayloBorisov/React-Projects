import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/index';
import {
         HomePage,
         NowPlayingPage,
         TopRatedPage, 
         UpcomingPage, 
         CategoriesPage,
         MovieDetailsPage,
         TvDetailsPage,
         SearchPage
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
        <Route path="/search/:query" component={ SearchPage }/>
      </Switch>
    </Router>
    )
}

export default Routes;