'use strict'

import './router.js'

import { fetchCharacters } from './request.js'

const data = await fetchCharacters()

const createCharacters = (name, image) =>{

    const container_characters = document.createElement('div')
    container_characters.classList.add('container_characters')

    const circle = document.createElement('div')
    circle.classList.add('circle')

    const simpsons = document.createElement('img')
    simpsons.classList.add('simpsons')
    simpsons.src = `https://static.wikia.nocookie.net/avatar/images/${image}`

    const nickname = document.createElement('a')
    nickname.classList.add('name')
    nickname.textContent = name.name
    nickname.href = '/personage'
    nickname.setAttribute('onclick', 'route()')
    nickname.id = name.id
    nickname.addEventListener('click', () =>{
        localStorage.setItem('name', name.name)
        localStorage.setItem('image', `https://static.wikia.nocookie.net/avatar/images/${image}`)
    })

    circle.append(simpsons, nickname)
    container_characters.append(circle)

    return container_characters
}

export const loadCharacters = async () => {
    const container = document.getElementById('characters')
    const avatars = await data.map(createCharacters)

   container.replaceChildren(...avatars)
}


const createPersonage = (physicalDescription) =>{
    
    const container_quotesPersonage = document.createElement('div')
    container_quotesPersonage.classList.add('container_quotesPersonage')

    const quotesPersonage = document.createElement('div')
    quotesPersonage.classList.add('quotesPersonage')

    const h3 = document.createElement('h3')
    h3.textContent = localStorage.getItem('name')

    const line = document.createElement('div')
    line.classList.add('line')

    const container_quotesFamous = document.createElement('div')
    container_quotesFamous.classList.add('container_quotesFamous')
    
    const quotesFamous = document.createElement('div')
    quotesFamous.classList.add('quotesFamous')

    const quotes1 = document.createElement('div')
    quotes1.classList.add('quotes')
    //
    const quotes2 = document.createElement('div')
    quotes2.classList.add('quotes')

    let phrase1 = document.createElement('div')
    phrase1.classList.add('phrase')
    phrase1 = physicalDescription.gender
    //
    let phrase2 = document.createElement('div')
    phrase2.classList.add('phrase')
    phrase2 = physicalDescription.eyeColor
    //
    const phrase3 = document.createElement('div')
    phrase3.classList.add('phrase')
    phrase3.textContent = 'Nothing you say can upset us. We\'re the MTV generation'
    //
    const phrase4 = document.createElement('div')
    phrase4.classList.add('phrase')
    phrase4.textContent = 'Nothing you say can upset us. We\'re the MTV generation'

    const container_personageSimpson = document.createElement('div')
    container_personageSimpson.classList.add('container_personageSimpson')

    const personageSimpson = document.createElement('img')
    personageSimpson.classList.add('personageSimpson')
    personageSimpson.src = localStorage.getItem('image')


    quotes1.append(phrase1, phrase2, phrase3, phrase4)
    //
    quotes2.append(phrase3, phrase4)

    quotesFamous.append(quotes1, quotes2)

    container_quotesFamous.append(quotesFamous)

    quotesPersonage.append(h3, line, container_quotesFamous)

    container_personageSimpson.append(personageSimpson)

    container_quotesPersonage.append(quotesPersonage, container_personageSimpson)

    return container_quotesPersonage
} 

export const loadPersonage = async () => {
    const container = document.getElementById('personage')
    const descriptions = await data.map(createPersonage)

   container.replaceChildren(descriptions)
}

