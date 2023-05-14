'use strict'

export const fetchCharacters = async () =>{
    const url = `https://api.sampleapis.com/avatar/characters`

    const response = await fetch(url)
    const allCharacters = await response.json()

    return allCharacters 
}

