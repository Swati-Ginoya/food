import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Home from './container/home/Home';
import Menu from './container/menu/Menu';
import { Route, Switch } from 'react-router-dom';
import Reservation from './container/reservation/Reservation';
import Gallery from './container/gallery/Gallery';
import About from './container/about/About';
import Blog from './container/blog/Blog';
import Contact from './container/contact/Contact';
import Order from './container/order/Order';
import Footer from './component/footer/Footer';
import Login from './container/login/Login';
import Categories from './container/categories/Categories';
import PublicRoute from './route/PublicRoute';
import PrivateRoute from './route/PrivateRoute';
import { persistor, store } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
     
        <Header />
        <Switch>
          <PublicRoute path={"/"} exact component={Home}></PublicRoute>
          <PublicRoute path={"/Menu"} exact component={Menu}></PublicRoute>
          <PrivateRoute path={"/Reservation"} exact component={Reservation}></PrivateRoute>
          <PublicRoute path={"/Gallery"} exact component={Gallery}></PublicRoute>
          <PublicRoute path={"/About"} exact component={About}></PublicRoute>
          <PublicRoute path={"/BLog"} exact component={Blog}></PublicRoute>
          <PublicRoute path={"/Contact"} exact component={Contact}></PublicRoute>
          <PrivateRoute path={"/Order"} exact component={Order} />
          <PublicRoute path={"/Login"} exact component={Login} />
          <PublicRoute path={"/Categories"} exact component={Categories} />
        </Switch>
        <Footer />
  
      </PersistGate>
      </Provider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
