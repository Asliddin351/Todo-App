export function getTodos() {
    return JSON.parse(localStorage.getItem('todos'))
}

export function saveTodos(todoArray) {
    return localStorage.setItem('todos', JSON.stringify(todoArray))
}

export function removeTodos() {
    return localStorage.removeItem('todos')
}