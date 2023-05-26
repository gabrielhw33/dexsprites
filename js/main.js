let dexInfo = document.getElementById('dexInfo')
let sprite = document.getElementById('sprite')

function randomPokemon (min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)

}
const randomId = randomPokemon(1, 1015)

const pokeInfo = async str => {
    try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${str}`)
        const data = await res.json()
    pokeData(data)
    }

    catch (error) {
        const errorMsg = (`The pokemon you submitted (${str}) either does not exist, or it isn't valid.`);
        console.error(errorMsg)
        box.innerText = errorMsg
    } 
} 


const capitalWords = word => { //stolen from darkie's code, sorry darkie i could've just googled it anyways
    return word
    .toLowerCase()
    .split(' ')
    .map(letter => letter.charAt(0).toUpperCase() + letter.slice(1))
    .join(' ');
}


const pokeData = data => {
const { id, name, sprites } = data
    
    
    //Sprite
     let pokeSprite = document.createElement('img')
     pokeSprite.src = sprites.front_default
    
    //Number
     let pokeId = document.createElement('p')
     let pokeDataId = document.createTextNode(`Number: ${id}`)
     pokeId.appendChild(pokeDataId)

    //Name 
     let pokeName = document.createElement('p')
     let pokeDataName = document.createTextNode(`Name: ${capitalWords(name)}`)
     pokeName.appendChild(pokeDataName)

     
     
     sprite.appendChild(pokeSprite)
     dexInfo.appendChild(pokeId)
     dexInfo.appendChild(pokeName)
}



    pokeInfo(randomId)
