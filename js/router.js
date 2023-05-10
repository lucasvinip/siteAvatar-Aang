'use strict'

const routes = {
    '/'             :   '/index.html            ',
    '/characters'   :   '/pages/characters.html ',
    '/curiosities'  :   '/pages/curiosities.html',
    '/character'    :   '/pages/character.html  '     
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    const route = routes[path]

    const response = await fetch(route) 
    const html = await response.text()

    document.getElementById('root').innerHTML = html
}

window.route = route