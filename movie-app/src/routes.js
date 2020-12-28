import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components/index';
import {
         HomePage,
         NowPlayingPage,
         TopRatedPage, 
         UpcomingPage, 
         DetailsPage, 
         NotFoundPage  
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
        <Route path="/movie/:id" component={ DetailsPage }/>

        <Route component={ NotFoundPage } />
        
      </Switch>
      <Footer />
    </Router>
    )
}

export default Routes;