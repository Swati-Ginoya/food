import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Home from './container/home/Home';
import Menu from './container/menu/Menu';
import { Route, Switch } from 'react-router-dom';
import Reservation from './container/reservation/Reservation';
import Gallery from './container/gallery/Gallery';
import About from './container/about/About';
import Blog from './container/blog/Blog';
import Contact from './container/contact/Contact';


function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route path={"/Home"} exact component={Home}></Route>
    <Route path={"/Menu"} exact component={Menu}></Route>
    <Route path={"/Reservation"} exact component={Reservation}></Route>
    <Route path={"/Gallery"} exact component={Gallery}></Route>
    <Route path={"/About"} exact component={About}></Route>
    <Route path={"/BLog"} exact component={Blog}></Route>
    <Route path={"/Contact"} exact component={Contact}></Route>
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
