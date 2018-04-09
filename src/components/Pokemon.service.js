function getFirstAbility(pokemon) {
  if(pokemon.abilities.length===0){
    return null
  } else {
    return pokemon.abilities[0].ability.name
  }
}

function convertPoundsToKilograms(value) {
  return value===undefined ? null : 0.45359237*value;
}

export {getFirstAbility, convertPoundsToKilograms}
