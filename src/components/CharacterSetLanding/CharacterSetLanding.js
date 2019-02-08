import React, { Fragment } from 'react';
import SideNav from '../SideNav/SideNav';
import { Query } from 'react-apollo';
import { GET_USER_CHARACTERS } from '../CharacterForm/CharacterForm';
import DataError from '../Utils/DataError/DataError'
import Loading from '../Utils/Loading/Loading';

const CharacterSetLanding = () => {
    return (
        <div>
            <div>
                <ul>
                    <li>Link one</li>
                    <li>Link two</li>
                </ul>
            </div>
            <div>
                <Query query={GET_USER_CHARACTERS}>
                    {({ data, error, loading }) => {
                        if (error) return <DataError />
                        if (loading) return <Loading />

                        const { userCharacters } = data;
                        return (
                            <Fragment>
                                {userCharacters.map((character) => {
                                    const { characterName, id } = character;
                                    return <p key={id}>{characterName}</p>
                                })}
                            </Fragment>
                        )
                        
                    }}
                </Query>
            </div>
            <div>
                <h1>Set Items</h1>
            </div>
        </div>
    )
};

export default CharacterSetLanding;