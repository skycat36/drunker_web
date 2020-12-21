import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";
import Home from './components/Home';
import Catalogue from './components/Catalogue'; 
import Payment from './components/Payment'; 
import Contact from './components/Contact'; 
import logo from './logo.svg';
import EpicMenu from './EpicMenu';
import Footer from './components/Footer';
import Titre from './components/Titre';
import Menu from './components/Menu';

class App extends Component {
  render() {
    let links = [
      { label: 'Home', link: '/Home', active: true },
      { label: 'КАТАЛОГ ТОВАРОВ', link: '/catalogue' },
      { label: 'ОПЛАТА И ДОСТАВКА', link: '/payment' },
      { label: 'КОНТАКТЫ', link: '/contact' },
    ];

    return (
      <BrowserRouter> 

        <div>
          <Titre />
        </div> 

{/*         <div className="container center">
          <EpicMenu links={links} logo={logo} /> 
        </div> */}

        <Menu links={links}/>

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