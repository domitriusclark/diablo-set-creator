import React from 'react'
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag'
import { EquipmentName } from '../../InventoryManager/InventoryManager';

const AccordianWrapper = styled.div`
    height: auto;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #B49F77;
`

const AccordianContainer = styled.div`
    width: 100%;
    height: 6rem;
`;

const AccordianHeading = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const AccordianButton = styled.button`
    border-radius: .6rem;
    padding: .5rem 1.1rem;
    font-size: 1.1rem;
    background: ${props => props.color || 'white' };
`

const AccordianContent = styled.div`
    height: 10rem;
    background: black;
    color: white;
    font-size: 1.4rem;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    
    & p:not(:first-of-type) {
        margin-top: -3rem;
    }
`

const ADD_EQUIPMENT = gql`
    mutation AddEquipment($item: Item!, $id: ID!) {
        addEquipment(item: $item, id: $id) @client {
            equipment
        }
    }
`;

const ItemAccordian = (props) => {
    const { currentCharacter } = props;    
    const { name, id, type, setName, slots, __typename  } = props;
    const newItem = {
        name,
        id,
        type,
        setName,
        slots,
        __typename
    }
    const { twoHanded } = type;
    const [isOpen, setIsOpen] = React.useState(false);  
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <AccordianWrapper>
            <AccordianContainer key={id}>
                <AccordianHeading>
                    <p>{name}</p>
                    <Mutation mutation={ADD_EQUIPMENT} variables={{item: newItem, id: currentCharacter.id}}>
                        {addEquipment => {
                            
                            return (
                                <AccordianButton onClick={addEquipment}>+</AccordianButton>
                            )
                        }}
                    </Mutation>                            
                    <AccordianButton color="green" onClick={toggleOpen}>></AccordianButton>
                </AccordianHeading>            
            </AccordianContainer>
            {
                isOpen ?  (
                    <AccordianContent>                                 
                        <p>Set: {setName}</p>
                        <p>Two-handed: {twoHanded === false ? 'No' : 'Yes'}</p>
                        <p>Slots: {slots}</p>
                    </AccordianContent> 
                ) : null}
        </AccordianWrapper>
    )
}

export default ItemAccordian
