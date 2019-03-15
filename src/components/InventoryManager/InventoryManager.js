import React, { Fragment } from 'react';
import styled  from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';

const InventoryManagerContainer = styled.div`
    height: 100vh;
    width: 70%;
    background: rebeccapurple;
`;

const EquipmentSlot = styled.div`
    width: 5rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    background: black;
`

const EquipmentName = styled.div`
    align-self: flex-end;
    height: 20%;
    color: white;
`

const GET_CURRENT_CHARACTER = gql`
    query GetSingleCharacter($id: Int!){
        userCharacter(id: $id) @client {
            equipment
        }
    }
`


const InventoryManager = (props) => {
    return (
        <InventoryManagerContainer>
            <Query query={GET_CURRENT_CHARACTER} variables={{ id: parseInt(props.match.params.characterClassId) }}>
                {({data}) => {
                    const { userCharacter } = data;
                    
                    return (
                        <Fragment>
                            {userCharacter !== undefined && userCharacter.equipment.map(item => {
                                console.log(item)
                                return (
                                    <EquipmentSlot>
                                        <EquipmentName>
                                            <p></p>
                                        </EquipmentName>
                                    </EquipmentSlot>
                                )
                            })}
                        </Fragment>
                    )
                }}
            </Query>
        </InventoryManagerContainer>
    )
};

export default withRouter(InventoryManager);