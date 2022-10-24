// //declaracion logica de variables
// let magic = [];

// //declaracion de variables visuales 
// let magicBoosterDrag = null;
// let magicDeck = null;

// //bind elements 
// const bindElements = () => {
//     magicBoosterDrag = document.querySelector('#magicBoosterDrag');
//     magicDeck = document.querySelector('#magicDeck');
// }
// //fetch magic info 
// const fetchMagic = async () => {
//     try {
//         const response = await fetch(`https://api.scryfall.com/cards/random`,{});
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     } finally {
//         return data;
//     }
// }

// const castMagicCards = (data) => {
//     return {
//         card : data.png
//         }
//     }

// //main function
// const main = () => {
//     bindElements();
//     fetchMagic();
// }
// //init app  
// main();

let cards = [ ] //agrega a la matriz el objeto completo 
let historyCards = [ ] //funcionaria para el storage
let common = 1;
let rare = 0;

const cardsNew = async() => {

    try{
        const respuesta = await fetch ('https://api.scryfall.com/cards/random');

        if(respuesta.status === 200){
            let datos = await respuesta.json();
            if(rare==1){
                common=1;
                rare=0;
    
            } 
            if(common<4 && datos.rarity!="rare"){
                let content = '<figure><img id="'+datos.id+'" src="'+ datos.image_uris.small + '" alt="'+ datos.name + '" onmouseover=""><span onclick="addItem(\''+datos.id+'\')">+</span></figure>';
                document.getElementById("main-cards").innerHTML += content
                cards.push(datos)
                common++
            }else if(common==4 && datos.rarity=="rare"){
                rare=1;
                let content = '<figure><img id="'+datos.id+'" src="'+ datos.image_uris.small + '" alt="'+ datos.name + '" onmouseover=""><span onclick="addItem(\''+datos.id+'\')">+</span></figure>';
                document.getElementById("main-cards").innerHTML += content
                cards.push(datos)
            }
        } else if (respuesta.status === 401){
            console.log('No encontre esa carta');

        } else if (respuesta.status === 404){
            console.log('La carta que buscas no existe');
        } else {
            console.log('Se produjo un error que no esta en nuestro sistema')
        }

    } catch(error){
        console.log(error);
    }
}

cardsNew();