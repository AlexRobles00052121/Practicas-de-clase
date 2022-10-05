const pokemon = [
    {
      name: "Pikachu",
      type: "electric",
      attackPoints: 55,
      defensePoints: 40,
    },
    {
      name: "Bulbasaur",
      type: "grass",
      attackPoints: 49,
      defensePoints: 49,
    },
    {
      name: "Charmander",
      type: "fire",
      attackPoints: 52,
      defensePoints: 43,
    },
    {
      name: "Squirtle",
      type: "water",
      attackPoints: 48,
      defensePoints: 65,
    },
];

const findFireType = pokemon.find((pokemon) => {
    return pokemon.type === "fire";
});

console.log(findFireType);

const sliceFirstTwoPokemon = pokemon.slice(0,2);

console.log(sliceFirstTwoPokemon);

pokemon.splice(2, 0, {
    name: "Mewtwo",
    type: "psychic",
    attackPoints: 110,
    defensePoints: 90,
});

console.log(pokemon);

const removePokemon = pokemon.slice(1);

console.log(removePokemon);

const showPokeTeam = pokemon.map(({name, type, attackPoints, defensePoints}) => {
  return `The pokemon ${name} is a ${type} type with ${attackPoints} attacking points and ${defensePoints}`;
});
  
console.log(showPokeTeam);


const totalAtaque = pokemon.reduce((previousValue, currentValue) => {
    return currentValue.attackPoints + previousValue;
}, 0);

console.log(totalAtaque);

const totalDefensa = pokemon.reduce((previousValue, currentValue) => {
    return currentValue.defensePoints + previousValue;
}, 0);

console.log(totalDefensa);

if (totalAtaque > totalDefensa) {
    console.log(`El equipo tiene mas puntos de ataque con un total de ${totalAtaque}`);
} else {
    console.log(`El equipo tiene mas puntos de ataque con un total de ${totalDefensa}`);
}