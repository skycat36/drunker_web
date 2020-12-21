import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";
import Home from './ongletsPages/Home';
import Catalogue from './ongletsPages/Catalogue'; 
import Payment from './ongletsPages/Payment'; 
import Contact from './ongletsPages/Contact'; 
import logo from './logo.svg';
import EpicMenu from './EpicMenu';
import Footer from './Footer';
import Titre from './components/Titre';
import Menu from './components/Menu';

class App extends Component {
  render() {
    let links = [
      { label: 'Home', link: '/', active: true },
      { label: 'КАТАЛОГ ТОВАРОВ', link: '/catalogue' },
      { label: 'ОПЛАТА И ДОСТАВКА', link: '/payment' },
      { label: 'КОНТАКТЫ', link: '/contact' },
    ];

    return (
      <BrowserRouter> 

        <div>
          <Titre />
        </div> 

        <div className="container center">
          <EpicMenu links={links} logo={logo} /> 
        </div>

        <Menu />

        <div>
          <Route exact path="/" component={Home}/>
        </div>
  
        <div>
          <Route exact path="/catalogue" component={Catalogue}/>
        </div>

        <div>
          <Route exact path="/payment" component={Payment}/>
        </div>

        <div>
          <Route exact path="/contact" component={Contact}/>
        </div>
        <div>
          <Footer />
        </div>

      </BrowserRouter> 

    );
  }
}

export default App;