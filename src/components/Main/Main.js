import React, { Component } from 'react';
import CharacterForm from '../CharacterForm/CharacterForm';

class Main extends Component {
    render() {
        const { DefaultComponent } = this.props;
        return (
            <div>
                { !DefaultComponent ? (<CharacterForm />) : (<DefaultComponent /> ) }                               
            </div>                                                    
        )
    };
};
 
export default Main;