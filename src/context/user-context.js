import { createContext, useState } from 'react';
import { getUserFormLocalstorage, removeUserFormLocalstorage,  saveUserToLocalstorage } from './../utils/userLocalstorage';

export const UserContext = createContext()

export const UserContextProvider = (props) => {
    
    const [name, setName] = useState(getUserFormLocalstorage() || '')

    const actions = {
        login : (username) => {
            setName(username)
            saveUserToLocalstorage(username)
        },

        logout: () => { 
            setName('')
            removeUserFormLocalstorage()
        }

    }
    

    return (
        <UserContext.Provider value={[name, actions]}>
            {props.children}
        </UserContext.Provider>
    )
}