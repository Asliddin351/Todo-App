export function getUserFormLocalstorage() {
    return localStorage.getItem('name')
}

export function saveUserToLocalstorage(username) {
    return localStorage.setItem('name', username)
}

export function removeUserFormLocalstorage() {
    return localStorage.removeItem('name')
}