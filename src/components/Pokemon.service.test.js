import {getFirstAbility, convertPoundsToKilograms} from './Pokemon.service';
import React from 'react';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ]
};


describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});

describe('Tests for convertPoundsToKilograms', () => {
  it('should return null if there is no input', () => {
    expect(convertPoundsToKilograms()).toEqual(null);
  });
  it('should return correct converted value', () => {
    expect(convertPoundsToKilograms(1)).toEqual(0.45359237);
  });
});
