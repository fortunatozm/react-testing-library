import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import pokemons from '../data';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const testPokedexTitle = screen.getByRole('heading', { level: 2,
      name: 'Encountered pokémons' });
    expect(testPokedexTitle).toBeInTheDocument();
    expect(testPokedexTitle.textContent).toBe('Encountered pokémons');
  });

  test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo '
  + 'pokémon é clicado', () => {
    renderWithRouter(<App />);
    const btText = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(btText).toBeInTheDocument();
    for (let index = 0; index < pokemons.length; index += 1) {
      const btNext = screen.getByText(pokemons[index].name);
      expect(btNext).toBeInTheDocument();
      userEvent.click(btText);
    }
    const btFirst = screen.getByText('Pikachu');
    expect(btFirst).toBeInTheDocument();
  });

  test('Teste se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);
    const btClick = screen.getByTestId('next-pokemon');
    userEvent.click(btClick);
    const btList = screen.getAllByTestId('pokemon-name');
    expect(btList.length).toBe(1);
  });

  test('Teste se a Pokédex tem os botões de filtro.', () => {
    renderWithRouter(<App />);
    const btId = screen.getAllByTestId('pokemon-type-button');
    expect(btId[0].textContent).toBe('Electric');
    userEvent.click(btId[0]);
    const eletric = screen.getAllByText('Electric');
    expect(eletric.length).toBe(2);

    expect(btId[1].textContent).toBe('Fire');
    userEvent.click(btId[1]);
    const fire = screen.getAllByText('Fire');
    expect(fire.length).toBe(2);

    expect(btId[2].textContent).toBe('Bug');
    userEvent.click(btId[2]);
    const bug = screen.getAllByText('Bug');
    expect(bug.length).toBe(2);

    expect(btId[3].textContent).toBe('Poison');
    userEvent.click(btId[3]);
    const poison = screen.getAllByText('Poison');
    expect(poison.length).toBe(2);

    expect(btId[4].textContent).toBe('Psychic');
    userEvent.click(btId[4]);
    const psychic = screen.getAllByText('Psychic');
    expect(psychic.length).toBe(2);

    expect(btId[5].textContent).toBe('Normal');
    userEvent.click(btId[5]);
    const normal = screen.getAllByText('Normal');
    expect(normal.length).toBe(2);

    expect(btId[6].textContent).toBe('Dragon');
    userEvent.click(btId[6]);
    const dragon = screen.getAllByText('Dragon');
    expect(dragon.length).toBe(2);

    const allways = screen.getByText('All');
    expect(allways).toBeInTheDocument();
    userEvent.click(allways);

    const proximo = screen.getByText('Próximo pokémon');
    userEvent.click(proximo);
    userEvent.click(proximo);
    userEvent.click(proximo);
    const pokemom = screen.getByText('Ekans');
    expect(pokemom).toBeInTheDocument();
  });
});
