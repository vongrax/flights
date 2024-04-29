import React from 'react';

import Layout from "./components/UI/Layout/Layout";
import Flights from "./containers/Flights/Flights";
import {Route, Switch} from "react-router";
import NewFlight from "./containers/NewFlight/NewFlight";
import EditFlight from "./containers/EditFlight/EditFlight";


const App: React.FC = () => {
    return (
        <>
            <Layout>
                <Switch>
                    <Route path='/' exact component={Flights}/>
                    <Route path='/admin' exact component={Flights}/>
                    <Route path='/flight/new' exact component={NewFlight}/>
                    <Route path='/flight/:id/edit' exact component={EditFlight}/>
                    <Route render={() => (<h1>Not Found</h1>)}/>
                </Switch>
            </Layout>
        </>
    );
};

export default App;