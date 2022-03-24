import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <Pokemon.js />', () => {
  test('Teste se é renderizado um card com as informações de determinado '
  + 'pokémon.', () => {
    renderWithRouter(<App />);
    const pokemonPikachu = screen.getByText('Pikachu');
    expect(pokemonPikachu).toBeInTheDocument();
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType.textContent).toBe('Electric');
    const pokemonWeight = screen.getByText('Average weight: 6.0 kg');
    expect(pokemonWeight).toBeInTheDocument();
    const pokemonImg = screen.getByRole('img');
    expect(pokemonImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/'
    + 'Spr_5b_025_m.png');
    expect(pokemonImg.alt).toBe('Pikachu sprite');
  });

  test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para'
  + 'exibirdetalhes deste Pokémon. O link deve possuir a URL /pokemons/<id>, onde <id> '
  + 'é o id do Pokémon exibido;', () => {
    const linkPokemom = screen.getByText('More details');
    expect(linkPokemom.closest('a')).toHaveAttribute('href', 'pokemons/25');
  });
});
