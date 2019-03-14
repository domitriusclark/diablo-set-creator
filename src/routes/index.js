import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Query } from 'react-apollo';
import CharacterSetLanding from '../components/CharacterSetLanding/CharacterSetLanding';
import DataError from '../components/utils/DataError/DataError';
import Loading from '../components/utils/Loading/Loading';
import { GET_USER_CHARACTERS } from '../components/CharacterForm/CharacterForm';

import Main from '../components/Main/Main';

class Routes extends Component {
    render() {
        return (
            <Fragment>  
                <Router>
                    <Switch>
                        <Query query={GET_USER_CHARACTERS}>
                            {({data, error, loading}) => {
                                if (error) return <DataError />
                                if (loading) return <Loading />

                                if( data.userCharacters.length > 0) {
                                    return <Route path="/set-creator" render={() => { return <Main DefaultComponent={CharacterSetLanding}/> }}/>
                                } else {
                                    return <Route exact path="/" render={() => { return <Main />}} /> 
                                }
                            }}
                        </Query> 
                    </Switch>            
                </Router>              
            </Fragment>
        )
    }
}

export default Routes;