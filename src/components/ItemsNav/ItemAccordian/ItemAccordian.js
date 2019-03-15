import React from 'react'
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag'
import CurrentCharacter from '../../../utils/CurrentCharacter';

const AccordianWrapper = styled.div`
    height: auto;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
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
    font-size: 1.7rem;
`

const ADD_EQUIPMENT = gql`
    mutation AddEquipment($item: Item!, $id: Int) {
        addEquipment(item: $item, id: $id) @client {
            item
        }
    }
`

const ItemAccordian = (props) => {
    const { name, id, type, setName } = props;
    const [isOpen, setIsOpen] = React.useState(false);  
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <CurrentCharacter>
            {({data}) => {
                const { userCharacter } = data;
                console.log(userCharacter)
                return (
                    <AccordianWrapper>
                        <AccordianContainer key={id}>
                            <AccordianHeading>
                                <p>{name}</p>
                                {}
                                <AccordianButton color="green" onClick={toggleOpen}>></AccordianButton>
                            </AccordianHeading>            
                        </AccordianContainer>
                        {isOpen ? <AccordianContent> Here's some content here</AccordianContent> : null}
                    </AccordianWrapper>
                )
            }}
        </CurrentCharacter>
    )
}

export default ItemAccordian
