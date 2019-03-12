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

# What needs to be built for the ItemsNav? 
* A button with a method that will add the item to the MainPage in the specified item slot
* A button to expand the drawer for some more information regarding the item

# What needs to be built inside of the InventoryManager?
* Slots for each equipment type. These areas will be filled with data from the ItemsNav selections.

# What needs to be built for the SideNav?
* Programatically add links depending on new characters created
