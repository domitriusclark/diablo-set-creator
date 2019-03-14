import React from 'react';
import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid rebeccapurple;
    margin: 5rem;
    height: 15rem;
    padding: 5rem;
`

const StyledForm = styled.form`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 10rem;

    & input {
        border: 1px solid black;
    }

    & button {
        border-radius: 4px;
        padding: 1rem;
        cursor: pointer;
    }
`

const H1 = styled.h1`
    font-size: 2rem;
    color: rebeccapurple;
`;

const diabloClasses = [
    {
        id: 0,
        name: "Witch Doctor"
    },
    {
        id: 1,
        name: "Barbarian"
    },
    {
        id: 2,
        name: "Wizard"
    },
    {
        id: 3,
        name: "Monk"
    },
    {
        id: 4,
        name: "Demon Hunter"
    },
    {
        id: 5,
        name: "Crusader"
    },
    {
        id: 6,
        name: "Necromancer"
    }
];

const ADD_CHARACTER = gql`
    mutation AddCharacter($characterName: String!, $characterClass: String!) {
        addCharacter(characterName: $characterName, characterClass: $characterClass) @client {
            id 
            characterName
            characterClass
        }
    }
`;

const GET_USER_CHARACTERS = gql`
    query GetUserCharacters {
        userCharacters @client {
            id
            characterName
            characterClass
        }
    }
`

const CharacterForm = (props) => {
    const textInput = React.useRef();
    const characterSelect = React.useRef();

    return (
        <Mutation mutation={ADD_CHARACTER} onCompleted={() => props.history.push('/set-creator')}>
            {(addCharacter) => (
                <div>
                    <FormWrapper>
                        <H1>Add Your Character!</H1>
                        <StyledForm onSubmit={(e) => {
                            e.preventDefault();
                            addCharacter({ variables: { characterName: textInput.current.value, characterClass: characterSelect.current.value }});                 
                            textInput.current.value = ''   
                        }}>
                            <input type="text" ref={textInput} />
                            <select ref={characterSelect}>
                                {diabloClasses.map((singleClass) => (
                                    <option value={singleClass.name}>{singleClass.name}</option>
                                ))}
                            </select>
                            <button>Add Character</button>
                        </StyledForm>                                
                    </FormWrapper>
                </div>                        
            )}
        </Mutation>
    )
}

// const CharacterForm = (props) => {
//     const textInput = React.useRef();
//     const characterSelect = React.useRef();
//     const { data, error, loading } = useQuery(GET_USER_CHARACTERS);
//     const { userCharacters } = data;

//     const addCharacter = useMutation(ADD_CHARACTER);

//     const handleOnComplete = (data) => {
//         const { variables } = data; 
//         const { characterName, characterClass } = variables;
//         addCharacter({variables: { characterName, characterClass }})        
//     }

//     if (error) return <DataError />
//     if (loading) return <Loading />

//     return (
//         <div>
//             <FormWrapper>
//                 <H1>Add Your Character!</H1>
//                 <StyledForm onSubmit={(e) => {
//                     e.preventDefault();
//                     handleOnComplete({ variables: { characterName: textInput.current.value, characterClass: characterSelect.current.value }});                    
//                 }}>
//                     <input type="text" ref={textInput} />
//                     <select ref={characterSelect}>
//                         {diabloClasses.map((singleClass) => (
//                             <option value={singleClass.name}>{singleClass.name}</option>
//                         ))}
//                     </select>
//                     <button>Add Character</button>
//                 </StyledForm>                                
//             </FormWrapper>
//             <div>
//                 {userCharacters.map((character) => {
//                     const { characterName, id } = character;
//                     return <p key={id}>{characterName}</p>
//                 })}
//             </div>
//         </div>
//     )
// };

export default withRouter(CharacterForm);
export { GET_USER_CHARACTERS }