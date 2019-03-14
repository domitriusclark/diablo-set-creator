import React from 'react'
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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

const GET_CHARACTER = gql`
    query GetSingleCharacte($id: Int!) {
        userCharacter(id: $id) @client{
            characterName
        }
    }
`

const ItemAccordian = ({ name, id, type, setName }) => {
    const [isOpen, setIsOpen] = React.useState(false);  
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Query query={GET_CHARACTER} variables={{id: 0}}>
            {({data}) => {
                console.log(data);
                return (
                    <AccordianWrapper>
                        <AccordianContainer key={id}>
                            <AccordianHeading>
                                <p>{name}</p>
                                <AccordianButton>+</AccordianButton>
                                <AccordianButton color="green" onClick={toggleOpen}>></AccordianButton>
                            </AccordianHeading>            
                        </AccordianContainer>
                        {isOpen ? <AccordianContent> Here's some content here</AccordianContent> : null}
                    </AccordianWrapper>
                )
            }}
        </Query>
    )
}

export default ItemAccordian
