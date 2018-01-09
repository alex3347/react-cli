import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import SearchResult from 'bundle-loader?lazy&name=searchResult!pages/SearchResult/SearchResult';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props}/> : <Loading/>
        }
    </Bundle>
);

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Home)}/>
            <Route path="/searchResult" component={createComponent(searchResult)}/>
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
);