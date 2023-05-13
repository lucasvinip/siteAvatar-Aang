'use strict'

import './router.js'
import { route } from './router.js'

const createCharacters = () =>{

    const container_characters = document.createElement('div')
    container_characters.classList.add('container_characters')

    const circle = document.createElement('div')
    circle.classList.add('circle')

    const simpsons = document.createElement('img')
    simpsons.classList.add('simpsons')
    simpsons.src = '../img/high1.png'

    const name = document.createElement('a')
    name.classList.add('name')
    name.textContent = 'Bart Simpson'
    name.href = '/personage'
    name.setAttribute('onclick', 'route()')

    circle.append(simpsons, name)
    container_characters.append(circle)

    return container_characters
}
export const loadCharacters = () => {
    const container = document.getElementById('characters')
   container.replaceChildren(createCharacters())
}

const createPersonage = () =>{
    
    const container_quotesPersonage = document.createElement('div')
    container_quotesPersonage.classList.add('container_quotesPersonage')

    const quotesPersonage = document.createElement('div')
    quotesPersonage.classList.add('container_quotesPersonage')

    const h3 = document.createElement('h3')
    h3.textContent = 'Famous Quotes'

    const line = document.createElement('div')
    line.classList.add('line')

    const container_quotesFamous = document.createElement('div')
    
    const quotesFamous = document.createElement('div')
    quotesFamous.classList.add('quotesFamous')

    const quotes = document.createElement('div')
    quotes.classList.add('quotes')

    const phrase1 = document.createElement('div')
    phrase1.classList.add('phrase')
    phrase1.textContent = 'Nothing you say can upset us. We\'re the MTV generation'
    //
    const phrase2 = document.createElement('div')
    phrase2.classList.add('phrase')
    phrase2.textContent = 'Nothing you say can upset us. We\'re the MTV generation'
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
    personageSimpson.src = '../img/background.png'


    quotes.append(phrase1, phrase2, phrase3, phrase4)

    quotesFamous.append(quotes)

    container_quotesFamous.append(quotesFamous)

    quotesPersonage.append(h3, line, container_quotesFamous)

    container_personageSimpson.append(personageSimpson)

    container_quotesPersonage.append(quotesPersonage, container_personageSimpson)

    return container_quotesPersonage
} 

// <!-- <div class="container_quotesPersonage">
//         <div class="quotesPersonage">
//             <h3>
//                 Famous Quotes
//             </h3>
//             <div class="line"></div>
//             <div class="container_quotesFamous">
//                 <div class="quotesFamous">
//                     <div class="quotes">
//                         <p class="phrase">
//                             Nothing you say can upset us. We're the MTV generation
//                         </p>
//                         <p class="phrase">
//                             Nothing you say can upset us. We're the MTV generation
//                         </p>
//                     </div>
//                     <div class="quotes">
//                         <p class="phrase">
//                             Nothing you say can upset us. We're the MTV generation
//                         </p>
//                         <p class="phrase">
//                             Nothing you say can upset us. We're the MTV generation
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="container_personageSimpson">
//             <img src="../img/background.png" alt="logo1" class="personageSimpson">
//         </div>
//     </div> -->


export const loadPersonage = () => {
    const container = document.getElementById('personage')
   container.replaceChildren(createPersonage())
}




// const simpsons = async () =>{
//     const url = `https://thesimpsonsquoteapi.glitch.me/quotes?character=homer simpson`

//     const response = await fetch(url)
//     const data = await response.json()

//     return data
// }

// console.log(simpsons([2]));