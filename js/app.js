'use strict'

import './router.js'

import { fetchCharacters } from './request.js'

const data = await fetchCharacters()

const createCharacters = (name) => {

    if (name.id == 14 || name.id == 15 || name.id == 16) 
        return ''
    else{
        const container_characters = document.createElement('div')
        container_characters.classList.add('container_characters')

        const circle = document.createElement('div')
        circle.classList.add('circle')

        const simpsons = document.createElement('img')
        simpsons.classList.add('simpsons')
        simpsons.src = `../img/${name.id}.webp`

        const nickname = document.createElement('a')
        nickname.classList.add('name')

        if (name.id == 7)
            nickname.textContent = 'Zuko'
        else if (name.id == 8)
            nickname.textContent = 'Suki'
        else if (name.id == 11)
            nickname.textContent = 'Azula'
        else
            nickname.textContent = name.name

        nickname.href = '/personage'
        nickname.setAttribute('onclick', 'route()')
        nickname.id = name.id
        nickname.addEventListener('click', () => {
            localStorage.setItem('id', name.id)
        })

        circle.append(simpsons, nickname)
        container_characters.append(circle)

        return container_characters
    }  
}

export const loadCharacters = async () => {
    const container = document.getElementById('characters')
    const avatars = await data.map(createCharacters)


    container.replaceChildren(...avatars)
}


const createPersonage = (physicalDescription) => {

    // console.log(physicalDescription);

    if (localStorage.getItem('id') == physicalDescription.id) {
        const container_quotesPersonage = document.createElement('div')
        container_quotesPersonage.classList.add('container_quotesPersonage')

        const quotesPersonage = document.createElement('div')
        quotesPersonage.classList.add('quotesPersonage')

        const h3 = document.createElement('h3')
        h3.textContent = physicalDescription.name

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

        const phrase1 = document.createElement('div')
        phrase1.classList.add('phrase')
        phrase1.textContent = physicalDescription.physicalDescription.gender
        //
        const phrase2 = document.createElement('div')
        phrase2.classList.add('phrase')
        phrase2.textContent = physicalDescription.physicalDescription.eyeColor
        //
        const phrase3 = document.createElement('div')
        phrase3.classList.add('phrase')
        phrase3.textContent = physicalDescription.physicalDescription.hairColor
        //
        const phrase4 = document.createElement('div')
        phrase4.classList.add('phrase')
        phrase4.textContent = physicalDescription.physicalDescription.skinColor

        const container_personageSimpson = document.createElement('div')
        container_personageSimpson.classList.add('container_personageSimpson')

        const personageSimpson = document.createElement('img')
        personageSimpson.classList.add('personageSimpson')
        personageSimpson.src = `../img/${physicalDescription.id}.webp`

        quotes1.append(phrase1, phrase2)
        //
        quotes2.append(phrase3, phrase4)

        quotesFamous.append(quotes1, quotes2)

        container_quotesFamous.append(quotesFamous)

        quotesPersonage.append(h3, line, container_quotesFamous)

        container_personageSimpson.append(personageSimpson)

        container_quotesPersonage.append(quotesPersonage, container_personageSimpson)

        return container_quotesPersonage
    }
    else {
        return ""
    }

}

export const loadPersonage = async () => {
    const container = document.getElementById('personage')
    const descriptions = await data.map(createPersonage)
    console.log(descriptions);

    container.replaceChildren(...descriptions)
}

