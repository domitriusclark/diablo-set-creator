# Needs for Item API

* After the characterClass is submitted, make an API call to getItemTypeIndex
* Look for an underscore in the itemTypeIndex.id -- if there is one match whatever comes after to the trimmed characterClass
* Take all of those results and everything without an underscore and make a call to to `d3/data/${itemTypeIndex.path}`
* After that a call to getItem with `d3/data/${itemType.path}` this will give us all of the details about each item that matches up with the class and or is usable by that class


# Once we have each item stored in our state we can 

* Query each item for: {
    id
    name
    icon
    flavorText
    type {
        id
    }
    slots
    dps
    atrributes {
        primary {
            text
        }
        secondary {
            text
        }
    }
    setItems
}