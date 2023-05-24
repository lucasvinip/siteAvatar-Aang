'use strict'

import './router.js'

import { fetchCharacters } from './request.js'

const data = await fetchCharacters()

const createCharacters = (avatar) => {

    if (avatar.id == 14 || avatar.id == 15 || avatar.id == 16)
        return ''
    else {
        const container_characters = document.createElement('div')
        container_characters.classList.add('container_characters')

        const circle = document.createElement('div')
        circle.classList.add('circle')

        const avatars = document.createElement('img')
        avatars.classList.add('simpsons')
        avatars.src = `../img/${avatar.id}.webp`

        const nickname = document.createElement('a')
        nickname.classList.add('name')

        if (avatar.id == 7)
            nickname.textContent = 'Zuko'
        else if (avatar.id == 8)
            nickname.textContent = 'Suki'
        else if (avatar.id == 11)
            nickname.textContent = 'Azula'
        else
            nickname.textContent = avatar.name

        nickname.href = '/personage'
        nickname.setAttribute('onclick', 'route()')
        nickname.id = avatar.id
        nickname.addEventListener('click', () => {
            localStorage.setItem('id', avatar.id)
        })

        circle.append(avatars, nickname)
        container_characters.append(circle)

        return container_characters
    }
}

export const loadCharacters = async () => {
    const container = document.getElementById('characters')
    const avatars = await data.map(createCharacters)


    container.replaceChildren(...avatars)
}


const createPersonage = (avatar) => {

    if (localStorage.getItem('id') == avatar.id) {
        const allPersonage = document.createElement('div')
        allPersonage.classList.add('allPersonage')

        const descriptionPersonage = document.createElement('div')
        descriptionPersonage.classList.add('descriptionPersonage')

        const h3 = document.createElement('h3')

        if (avatar.id == 7)
            h3.textContent = 'Zuko'
        else if (avatar.id == 8)
            h3.textContent = 'Suki'
        else if (avatar.id == 11)
            h3.textContent = 'Azula'
        else
            h3.textContent = avatar.name
        
        const line = document.createElement('div')
        line.classList.add('line')

        const physicalDescription = document.createElement('div')
        physicalDescription.classList.add('physicalDescription')

        const descriptions = document.createElement('div')
        descriptions.classList.add('descriptions')

        const physical1 = document.createElement('div')
        physical1.classList.add('physical')
        //
        const physical2 = document.createElement('div')
        physical2.classList.add('physical')



        const phrase1 = document.createElement('p')
        phrase1.classList.add('phrase')
        phrase1.innerHTML =  `<span style="color: black;">Gender:</span> <span style="color: white;">${avatar.physicalDescription.gender}</span>
                                <span style="color: black;">Eye Color:</span> <span style="color: white;">${avatar.physicalDescription.eyeColor}</span>`
        
        //
        const phrase2 = document.createElement('p')
        phrase2.classList.add('phrase')
        phrase2.innerHTML = `   <span style="color: gray;">Hair Color:</span> <span style="color: white;">${avatar.physicalDescription.hairColor}</span>
                                <span style="color: gray;">Skin Color:</span> <span style="color: white;">${avatar.physicalDescription.skinColor}</span>`
        


        const container_personageAvatar = document.createElement('div')
        container_personageAvatar.classList.add('container_personageAvatar')

        const personageAvatar = document.createElement('img')
        personageAvatar.classList.add('personageImg')
        personageAvatar.src = `../img/${avatar.id}.webp`

        physical1.append(phrase1)
        //
        physical2.append(phrase2)

        descriptions.append(physical1, physical2)

        physicalDescription.append(descriptions)

        descriptionPersonage.append(h3, line, physicalDescription)

        container_personageAvatar.append(personageAvatar)

        allPersonage.append(descriptionPersonage, container_personageAvatar)

        return allPersonage
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



// const createcuriosities = () =>{

//     const curiositiesOne
// }
