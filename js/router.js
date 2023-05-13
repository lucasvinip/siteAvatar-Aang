'use strict'

import './app.js'
import { loadCharacters } from './app.js'
import { loadPersonage } from './app.js'



const routes = {
    '/'             :   '/index.html            ',
    '/characters'   :   '/pages/characters.html ',
    '/personage'    :   '/pages/personage.html  ', 
    '/curiosities'  :   '/pages/curiosities.html'
}

export const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    const route = routes[path]

    const response = await fetch(route) 
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if(path == '/characters')
        loadCharacters()
    if(path == '/personage')
        loadPersonage()
    
}

window.route = route