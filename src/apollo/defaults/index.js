export default {
    userCharacters: [{ 
        __typename: "SingleCharacter", 
        characterName: "Juicetrades", 
        characterClass: "Demon Hunter", 
        id: 0
    }],
    items: [
        {
            __typename: "Item",
            id: 'Unique_Gloves_Set_03_p2',
            name: 'Fiendish Grips',
            icon: 'unique_gloves_set_03_p2_demonhunter_male',
            slots: ["hands"],
            setName: 'Unhallowed Essence',
            type: {
                __typename: 'ItemType',
                twoHanded: false,
                id: "Gloves_DemonHunter"
            }
        },
        {
            __typename: "Item",
            id: 'Unique_Gloves_Set_07_x1',
            name: "Marauder's Gloves",
            icon: 'unique_gloves_set_07_x1_demonhunter_male',
            slots: ["hands"],
            setName: 'Embodiment of the Marauder',
            type: {
                __typename: 'ItemType',
                twoHanded: false,
                id: "Gloves_DemonHunter"
            }
        }
    ]
};

