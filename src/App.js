import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AppRouter from './pages/appRouter/AppRouter';
import Blog from './pages/blog/Blog';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';
import ScrollToTop from "./scrollTop/ScrollToTop"


function App() {
  
  return (
    <Router>
      <div className="app">
        <ScrollToTop>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/approuter" component={AppRouter} />
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
