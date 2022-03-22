import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  test('O primeiro link deve possuir o texto Home, About, Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });
    expect(home).toBeInTheDocument();
    const about = screen.getByRole('link', { name: 'About' });
    expect(about).toBeInTheDocument();
    const favoriteP = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(favoriteP).toBeInTheDocument();
  });

  test('Teste se a aplicação é redirecionada para a página inicial,'
  + 'na URL /  ao clicar no link Home da barra de navegação.', () => {
    renderWithRouter(<App />);

    const homeClick = screen.getByRole('link', { name: 'Home' });
    userEvent.click(homeClick);
    const titleHome = screen.getByRole('heading', { name: 'Encountered pokémons' });
    expect(titleHome).toBeInTheDocument();
  });

  test('Teste se a aplicação é redirecionada para a página de About,'
  + 'na URL /about, ao clicar no link About da barra de navegação.', () => {
    renderWithRouter(<App />);

    const aboutClick = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutClick);
    const titleAbout = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(titleAbout).toBeInTheDocument();
  });

  test('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados,'
  + 'na URL /favorites, ao clicar no link Favorite Pokémons da barra de'
  + 'navegação.', () => {
    renderWithRouter(<App />);

    const favoriteClick = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favoriteClick);
    const titleFavorite = screen.getByRole('heading', { name: 'Favorite pokémons' });
    expect(titleFavorite).toBeInTheDocument();
  });

  test('Teste se a aplicação é redirecionada para a página Not Found'
  + 'ao entrar em uma URL desconhecida.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/kelly');
    // console.log(history);
    const titleNotFound = screen.getByRole('heading',
      { name: 'Page requested not found' });
    expect(titleNotFound).toBeInTheDocument();
  });
});
