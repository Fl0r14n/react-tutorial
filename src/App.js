import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HomePage, AboutPage, ShopPage} from './pages.js';
import {Header, Footer, Navigation} from './components';

const App = () => {
    return (
        <div className={'App'}>
            <Router>
                <Header>
                    <Navigation/>
                </Header>
                <Switch>
                    <Route path={'/'} exact component={HomePage}/>
                    <Route path={'/about'} exact component={AboutPage}/>
                    <Route path={'/shop'} exact component={ShopPage}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;
