import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Query } from 'react-apollo';
import CharacterSetLanding from '../components/CharacterSetLanding/CharacterSetLanding';
import DataError from '../utils/DataError/DataError';
import Loading from '../utils/Loading/Loading';
import { GET_USER_CHARACTERS } from '../components/CharacterForm/CharacterForm';
import { diabloClasses } from '../utils';

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
                                const { userCharacters } = data;

                                if( userCharacters.length > 0) {
                                    return (
                                        <Fragment>
                                            <Route exact path="/" render={() => { return <Main />}} /> 
                                            {
                                                diabloClasses.map(diabloClass => 
                                                    <Route key={diabloClass.id} path={`/${diabloClass.name.replace(/\s/g, '')}/:characterId`} render={() => { 
                                                        return <Main DefaultComponent={CharacterSetLanding}/> 
                                                    }}/>
                                                )
                                            }
                                        </Fragment>
                                    ) 
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